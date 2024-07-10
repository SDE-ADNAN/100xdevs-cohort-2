import Appbar from "../components/Appbar"
import { Blog } from "./Blogs"


export const FullBlog = ({blog}:{blog:Blog}) => {
    if(!blog){
        return "dsfd"
    }
    return <div >
        <Appbar />
        <div className="grid grid-cols-12 px-10 w-full pt-200">
            <div className="bg-red-200 col-span-8">
                {blog.title}
            </div>
            <div className="bg-green-200 col-span-4">
                {blog.content}
            </div>
        </div>
    </div>
}