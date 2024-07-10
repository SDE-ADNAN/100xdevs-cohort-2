import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

export interface Blog{
    id:string;
    title:string;
    content:string;
    publishedDate:string;
    published:string;
    author:{
        name:string
    }
}
const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if(loading){
        return <div>Loading....</div>
    }
    return (
        <div>
            <Appbar />
            <div className="flex flex-col px-4 justify-center py-8">
                    {blogs && blogs.map((item: Blog,index:number) => <BlogCard
                        key={`${index}`}
                        id={item.id}
                        authorName={item.author.name}
                        title={item.title}
                        content={item.content}
                        publishedDate={"28th September 2018"}
                    />)}
            </div>
        </div>
    )
}

export default Blogs