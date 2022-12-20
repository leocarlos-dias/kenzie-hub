import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [stack, setStack] = useState([]);
    const [loading, setLoading] = useState(false);
    const [charging, setCharging] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const token = localStorage.getItem("@TOKEN");

            if (!token) {
                setCharging(false);
                return;
            }
            try {
                const response = await request.get("/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
                setStack(response.data.techs)
            } catch {
                localStorage.clear();

            } finally {
                setCharging(false);

            }
        }
        loadUser();
    }, []);

    async function login(data) {

        try {
            setLoading(true);

            const response = await request.post('/sessions', data);
            const { token, user: userResponse } = response.data;

            setUser(userResponse);
            setStack(userResponse.techs);
            window.localStorage.setItem("@TOKEN", token);

            toast.success("Usuário logado com sucesso!");
            navigate("/")

        } catch {
            toast.error("Ops! Algo deu errado");

        } finally {
            setLoading(false);
        }
    }

    function logout(data) {
        localStorage.clear();
        setStack(false);
        navigate("/login")
    }

    async function register(data) {

        try {
            setLoading(true);
            await request.post("/users", data);
            toast.success("Conta criada com sucesso!");
            navigate("/login");

        } catch {
            toast.error("Ops! Algo deu errado");

        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider
            value={{ login, logout, register, user, setUser, loading, stack, setStack, setLoading, charging, setCharging }}>
            {children}
        </AuthContext.Provider>
    )
}
