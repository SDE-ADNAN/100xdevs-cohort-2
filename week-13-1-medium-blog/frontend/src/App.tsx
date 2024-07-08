import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './pages/SignIn'
import Blog from './pages/Blog'
import Signup from './pages/SignUp'
import Blogs from './pages/Blogs.tsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App