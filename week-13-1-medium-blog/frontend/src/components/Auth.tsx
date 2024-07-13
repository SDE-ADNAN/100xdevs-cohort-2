import { SignupInput } from "@adnan3621/medium-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';
import { BACKEND_URL } from "../config";

const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate()

    const [postInputs, setPostInputs] = useState<SignupInput>({
        username: "",
        password: "",
        name: ""
    })

    async function request() {
        try {
            const reaponse = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
            const jwt = reaponse.data
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an account </div>
                        <div className="text-slate-500 ">
                            {type === "signin" ? "Don't have an account ?" : "Already have an account?"}
                            <Link className="pl-2 underline" to={(type === "signin" ? "/signup" : "/signin")}>
                                {type === "signin" ? "Sign Up" : "Sign In"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type === "signup" ?
                            <LabelledInput label='Name' placeholder="Adnan Khan..." onChange={(e) => {
                                setPostInputs((state: SignupInput) => ({ ...state, name: e.target.value }))
                            }} /> : ""}
                        <LabelledInput label='Username' placeholder="Adnan3621" onChange={(e) => {
                            setPostInputs((state: SignupInput) => ({ ...state, username: e.target.value }))
                        }} />
                        <LabelledInput label='Password' type="password" placeholder="******" onChange={(e) => {
                            setPostInputs((state: SignupInput) => ({ ...state, password: e.target.value }))
                        }} />
                        <button type="button" onClick={request} className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

const LabelledInput = ({ label, placeholder, onChange, type }: LabelledInputType) => {
    return (<div className="pt-4">
        < label className="block mb-2 text-sm font-semibold text-black">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder}
            required />
    </div>)
}

export default Auth