import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import DotLoader from "react-spinners/DotLoader";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Button } from "../../../styles/Button";
import { Input } from "../../Input";
import { ButtonsRow, Container, FormWrapper, Select } from "../style";
import { Helper } from "../../Input/style";
import { TechContext } from "../../../contexts/TechContext";

export const Form = ({ children }) => {
    const { loading } = useContext(AuthContext);
    const { editTech, deletTech, currentValueTech, } = useContext(TechContext);
    const [changed, setChaged] = useState(true);

    const schema = yup.object().shape({
        status: yup
            .string()
            .required("É necessário selecionar um status"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(schema),
        defaultValues: {
            "title": currentValueTech.title,
            "status": currentValueTech.status
        },
    });

    function selectChanged(currentValue) {
        if (currentValueTech.status !== currentValue && currentValue !== "") {
            setChaged(!changed);
        }
    }

    return (
        <Container onSubmit={handleSubmit(editTech)} >
            <FormWrapper>
                {children}
                <fieldset>
                    <Input label="Nome" name="title" type="text" placeholder="Digite o nome da tecnologia" errors={errors.title} register={register("title")} disabled={true} />
                    <Select>
                        <label>Selecionar status</label>
                        <select onClick={(e) => selectChanged(e.target.value)} name="status" {...register("status")}>
                            <option value="">Selecionar um status</option>
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </select>
                        {!!errors.message && <Helper>{errors.message.status}</Helper>}
                    </Select>
                    {
                        loading
                            ? <DotLoader color="#FF577F" size={48} />
                            : <ButtonsRow>
                                <Button disabled={changed} type="submit" color="primary">Salvar alteração</Button>
                                <Button onClick={deletTech} type="button" color="grey">Excluir</Button>
                            </ButtonsRow>
                    }

                </fieldset>
            </FormWrapper >
        </Container >);
}