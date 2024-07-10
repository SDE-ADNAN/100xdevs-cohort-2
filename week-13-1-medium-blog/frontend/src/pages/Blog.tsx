import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { FullBlog } from "./FullBlog"

const Blog = () => {
  const { id } = useParams()
  const { loading, blog } = useBlog(id || "1")
  if (loading) {
    return <div>Loading....</div>
  }
  return (
    <div>{blog && <FullBlog blog={blog} />}</div>
  )
}

export default Blog