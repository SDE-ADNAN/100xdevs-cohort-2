import { Link } from "react-router-dom";

interface BlogCardProps {
    id:string;
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
}


const BlogCard = ({ id, authorName, title, content, publishedDate }: BlogCardProps) => {
    return (
        <Link to={`/blog/${id}`}>
        <div className="border-b-2 border-slate-200 py-4 w-screen max-w-screen-lg">
            <div className="flex">
                <Avatar name={authorName} />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="flex justify-center flex-col pl-2">
                    <Circle />
                </div>
                <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold">
                {title}
            </div>
            <div className="text-sm font-light">
                {`${content.length > 100 ? content.slice(0, 100) + "..." : content}`}
            </div>
            <div className="text-slate-500 text-xs font-light pt-4">
                {`${Math.ceil(content.length / 100)} min read`}
            </div>
        </div>
        </Link>
    )
}


export default BlogCard

function Circle() {
    return <div className="h-1
w-1 rounded-full bg-slate-400">
    </div>
}

export function Avatar({ name, size = 5 }: { name: string, size?: number }) {
    return (
        <div className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className="font-xs font-extralight text-gray-600 dark:text-gray-300">
                {name.charAt(0).toUpperCase()}
            </span>
        </div>
    )
}