import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/SignIn';
import Blog from './pages/Blog';
import Signup from './pages/SignUp';
import Blogs from './pages/Blogs';
import Publish from './pages/Publish';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoogedIn] = useState(false)
  const token = Boolean(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      setIsLoogedIn(!!token);
    }
  }, [token])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={!isLoggedIn ? <Signin /> : <Navigate to="/blogs" replace />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}>
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Route>

        {/* Default redirect */}
        <Route path="/" element={<Navigate to={isLoggedIn ? "/blogs" : "/signin"} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;