import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";

export const useBlogs =()=>{
    const [ loading, setIsLoading] = useState(true);
    const [ blogs, setBlogs] = useState([]);

    const token = localStorage.getItem("token");

    const config = {
        headers: { Authorization: `${token}` }
    };
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,config).then(response=>{
            setBlogs(response.data.blogs);
            setIsLoading(false);
        })
    },[])

    return {
        loading,
        blogs
    }
}