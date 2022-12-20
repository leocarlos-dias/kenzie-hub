/* eslint-disable react-hooks/exhaustive-deps */
import { Container, StyledWrapper } from "./style";
import { Header } from "../../components/Header";
import { Form } from "../../components/Form/Register";
import { StyledLink } from "../../styles/Button"
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
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
            <StyledWrapper>
                <Header>
                    <StyledLink to="/login" color="small">Voltar</StyledLink>
                </Header>
            </StyledWrapper>
            <Form />
        </Container>
    );
}