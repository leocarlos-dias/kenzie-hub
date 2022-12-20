import { Route, Routes } from "react-router-dom";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const MainRoutes = () => {


    return (
        < Routes >
            <Route element={<ProtectRoutes />}>
                <Route path="/" element={<Home />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
        </Routes >);
} 