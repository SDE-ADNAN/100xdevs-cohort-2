import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "./FullBlog"
import Appbar from "../components/Appbar"
import { Spinner } from "../components/Spinner"

const Blog = () => {
  const { id } = useParams()
  const { loading, blog } = useBlog(id || "1")
  if (loading || !blog) {
    return <div>
      <Appbar />
      <div className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <Spinner />
        </div>
      </div>
    </div>
  }
  return (
    <div>{blog && <FullBlog blog={blog} />}</div>
  )
}

export default Blog