import { Navigate, Outlet } from 'react-router';


const PrivatePage = () => {
    const isAuthenticated = Boolean(localStorage.getItem('token'));

    if (isAuthenticated === false) {
        return <Navigate to="/account/login" />;
    }

    return <Outlet />;
};

export default PrivatePage;