import { createContext, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify";
import { MyModal } from "../components/Modal/Modal";
import { request } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext(null);

export const TechProvider = ({ children }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const { setLoading, stack, setStack } = useContext(AuthContext);
    const [currentValueTech, setCurrentValueTech] = useState({"title" : "Ola"});

    useEffect(() => {
        closeModal();
    }, [stack])

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
        setCurrentValueTech(null);
    }

    async function createTech(data) {
        const token = localStorage.getItem("@TOKEN");

        try {
            setLoading(true);
            const response = await request.post("/users/techs", data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            delete response.data.user

            setStack((previous) => [...previous, response.data]);
            toast.success("Tecnologia criada com sucesso!");
        } catch {
            toast.error("Ops! Algo deu errado");

        } finally {
            setLoading(false);

        }
    }

    async function editTech(data) {
        const token = localStorage.getItem("@TOKEN");
        const idTech = currentValueTech.idTech;

        try {
            setLoading(true);
            await request.put(`/users/techs/${idTech}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updateStack = stack.map(tech => {
                if (tech.id === idTech) {
                    tech.status = data.status;
                }
                return tech
            });

            setStack(updateStack);
            toast.success("Tecnologia editada com sucesso!");

        } catch {
            toast.error("Ops! Algo deu errado");

        } finally {
            setLoading(false);

        }
    }

    async function deletTech() {
        const token = localStorage.getItem("@TOKEN");
        const idTech = currentValueTech.idTech

        try {
            setLoading(true);
            await request.delete(`/users/techs/${idTech}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const updateStack = stack.filter(tech => tech.id !== idTech);

            setStack(updateStack);
            toast.success("Tecnologia deletada com sucesso!");
        } catch {
            toast.error("Ops! Algo deu errado");

        } finally {
            setLoading(false);

        }
    }

    return (
        <TechContext.Provider
            value={{ openModal, closeModal, modalIsOpen, createTech, editTech, deletTech, currentValueTech, setCurrentValueTech }}>
            {children}
            <MyModal />
        </TechContext.Provider>);
}