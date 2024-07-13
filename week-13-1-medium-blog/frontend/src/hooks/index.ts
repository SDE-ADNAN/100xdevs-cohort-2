import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { Blog } from "../pages/Blogs";

export const useBlogs = () => {
    const [loading, setIsLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>();
    const token = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `${token}` }
    };
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, config).then(response => {
            setBlogs(response.data.blogs);
            setIsLoading(false);
        })
    }, [])
    
    return {
        loading,
        blogs
    }
}


export const useBlog = (id: string) => {
    const [loading, setIsLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    const token = localStorage.getItem("token");
    const config = {
        headers: { Authorization: `${token}` }
    };

    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, config).then(response => {
            setBlog(response.data.blog);
            setIsLoading(false);
        })
    }, [])

    return {
        loading,
        blog
    }
}