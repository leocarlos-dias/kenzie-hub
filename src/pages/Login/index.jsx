/* eslint-disable react-hooks/exhaustive-deps */
import { Container } from "./style";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form/Login";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { charging, setCharging } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('@TOKEN');

        if (token) {
            navigate('/')
        }
        setCharging(false);
    }, [navigate])

    if (charging) {
        return null;
    }

    return (
        <Container>
            <Header />
            <Form />
        </Container>
    );
}