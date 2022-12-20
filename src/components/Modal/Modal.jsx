import { Title3 } from "../Text";
import { StyledAiOutlineClose, StyledHeaderModal, StyledModal, StyledWarpper } from "./style";
import { Form as FormEdit } from "../Form/EditTech";
import { Form as FormCreate } from "../Form/CreateTech";
import { TechContext } from "../../contexts/TechContext";
import { useContext } from "react";

export const MyModal = () => {
    const { modalIsOpen, closeModal, currentValueTech } = useContext(TechContext);

    return (
        <StyledModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Exemplo"
            overlayClassName="modal-overlay"
            className="modal-content">
            <StyledWarpper>
                {!currentValueTech
                    ?
                    <FormCreate>
                        <StyledHeaderModal>
                            <Title3 size={14} wight={700}>Cadastrar Tecnologia</Title3>
                            <StyledAiOutlineClose onClick={closeModal} />
                        </StyledHeaderModal>
                    </FormCreate>
                    :
                    <FormEdit>
                        <StyledHeaderModal>
                            <Title3 size={14} wight={700}>Cadastrar Tecnologia</Title3>
                            <StyledAiOutlineClose onClick={closeModal} />
                        </StyledHeaderModal>
                    </FormEdit>
                }
            </StyledWarpper>
        </StyledModal>);
}