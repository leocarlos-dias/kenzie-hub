import { Input } from "../../Input";
import { ButtonsColumn, Container, FormWrapper } from "../style";
import { Button, StyledLink } from "../../../styles/Button";
import { Text, Title1 } from "../../Text";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from "../../../contexts/AuthContext";

export const Form = () => {
    const { login, loading } = useContext(AuthContext);

    const schema = yup.object().shape({
        email: yup
            .string()
            .required("É necessário inserir um email")
            .email("É necessário ser um email"),

        password: yup
            .string()
            .required("É necessário inserir uma senha"),
    });


    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    return (
        <Container onSubmit={handleSubmit(login)}>
            <FormWrapper>
                <fieldset>
                    <Title1 pattern="large" color="grey0" weight="bold">Login</Title1>
                    <Input label="E-mail" name="email" type="email" placeholder="Digite o seu e-mail" errors={errors.email} register={register("email")} />
                    <Input label="Senha" name="password" type="password" placeholder="Digite a sua senha" errors={errors.password} register={register("password")} />

                    <ButtonsColumn>
                        {
                            loading
                                ? <DotLoader color="#FF577F" size={48} />
                                : <Button color="primary">Entrar</Button>
                        }
                        <Text pattern="medium" color="grey1" weight="regular">Ainda não possui uma conta?</Text>
                        <StyledLink to="/register" color="grey" disabled={loading}>Cadastre-se</StyledLink >
                    </ButtonsColumn>
                </fieldset>
            </FormWrapper >
        </Container >);
}