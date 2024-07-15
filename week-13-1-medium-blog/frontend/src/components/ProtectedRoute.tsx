import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;