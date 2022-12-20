import { Input } from "../../Input";
import { Container, FormWrapper, Select } from "../style";
import { Button } from "../../../styles/Button"
import { Text, Title1 } from "../../Text";
import { Helper } from "../../Input/style";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { AuthContext } from "../../../contexts/AuthContext";

export const Form = () => {
    const { register: registerUser, loading } = useContext(AuthContext);

    const schema = yup.object().shape({
        name: yup
            .string()
            .required("É necessário inserir um nome"),

        email: yup
            .string()
            .required("É necessário inserir um email")
            .email("É necessário ser um email"),

        password: yup
            .string()
            .required("É necessário inserir uma senha")
            .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
            .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
            .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
            .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere especial")
            .min(8, "É necessário pelo menos 8 caracteres"),

        confirmPassword: yup
            .string()
            .required("É necessário inserir uma senha").oneOf([yup.ref('password')], "As senhas devem corresponder"),

        bio: yup
            .string()
            .required("É necessário inserir uma bio"),

        contact: yup
            .string()
            .required("É necessário inserir um contato"),

        course_module: yup
            .string()
            .required("É necessário selecionar um módulo"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema),
    });

    return (
        <Container onSubmit={handleSubmit(registerUser)}>
            <FormWrapper>
                <fieldset>
                    <Title1 pattern="large" color="grey0" weight="bold">Crie sua conta</Title1>
                    <Text pattern="small" color={"grey1"}>Rapido e grátis, vamos nessa</Text>
                    <Input label="Nome" name="name" type="text" placeholder="Digite o seu nome" errors={errors.name} register={register("name")} />
                    <Input label="E-mail" name="email" type="email" placeholder="Digite o seu e-mail" errors={errors.email} register={register("email")} />
                    <Input label="Senha" name="password" type="password" placeholder="Digite a sua senha" errors={errors.password} register={register("password")} />
                    <Input label="Confirmar Senha" name="confirmPassword" type="password" placeholder="Confirme a sua senha" errors={errors.confirmPassword} register={register("confirmPassword")} />
                    <Input label="Bio" name="bio" type="text" placeholder="Digite a sua bio" errors={errors.bio} register={register("bio")} />
                    <Input label="Contato" name="contact" type="text" placeholder="Digite o seu contato" errors={errors.contact} register={register("contact")} />

                    <Select>
                        <label>Módulo</label>
                        <select name="course_module" {...register("course_module")}>
                            <option value="">Selecionar um módulo</option>
                            <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                            <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                            <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                        </select>
                        {!!errors.message && <Helper>{errors.message.course_module}</Helper>}
                    </Select>
                    {
                        loading
                            ? <DotLoader color="#FF577F" size={48} />
                            : <Button size="normal" color="primary" disabled={!!Object.keys(errors).length ? true : false}>Cadastrar</Button>
                    }
                </fieldset>
            </FormWrapper >
        </Container >);
}