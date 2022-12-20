import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "../../../styles/Button";
import { Input } from "../../Input";
import { ButtonsColumn, Container, FormWrapper, Select } from "../style";
import { Helper } from "../../Input/style";
import { TechContext } from "../../../contexts/TechContext";

export const Form = ({ children }) => {
    const { loading } = useContext(AuthContext);
    const { createTech} = useContext(TechContext);

    const schema = yup.object().shape({
        title: yup
            .string()
            .required("É necessário inserir um nome"),

        status: yup
            .string()
            .required("É necessário selecionar um status"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
    });

    return (
        <Container onSubmit={handleSubmit(createTech)}>
            <FormWrapper>
                {children}
                <fieldset>
                    <Input label="Nome" name="title" type="text" placeholder="Digite o nome da tecnologia" errors={errors.title} register={register("title")} />
                    <Select>
                        <label>Selecionar status</label>
                        <select name="status" {...register("status")}>
                            <option value="">Selecionar um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {!!errors.message && <Helper>{errors.message.status}</Helper>}
                    </Select>
                    <ButtonsColumn>
                        {
                            loading
                                ? <DotLoader color="#FF577F" size={48} />
                                : <Button color="primary">Cadastrar Tecnologia</Button>
                        }
                    </ButtonsColumn>
                </fieldset>
            </FormWrapper >
        </Container >);
}