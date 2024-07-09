import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks"

interface BlogRes{
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
            <div className="flex justify-center py-8">
                <div className="w-xl">
                    {blogs.map((item: BlogRes,index) => <BlogCard
                        key={`${index}`}
                        authorName={item.author.name}
                        title={item.title}
                        content={item.content}
                        publishedDate={item.published}
                    />)}
                </div>
            </div>
        </div>
    )
}

export default Blogs