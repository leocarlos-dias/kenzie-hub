import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const ProtectRoutes = () => {
    const { user, charging } = useContext(AuthContext);

    if (charging) {
        return null;
    }

    return user ? <Outlet /> : <Navigate to='/login' />
}