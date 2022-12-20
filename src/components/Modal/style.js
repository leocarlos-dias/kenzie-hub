import styled from "styled-components";
import Modal from "react-modal"
import { Wrapper } from "../../styles/Wrapper";
import { AiOutlineClose } from "react-icons/ai"

export const StyledModal = styled(Modal)`
    height: 100vh;
    width: 100vw;

    position: fixed;
    left: 0;
    top:0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: rgba(18, 18, 20, 0.5);
`

export const StyledWarpper = styled(Wrapper)`
    max-width: 440px;  
`

export const StyledHeaderModal = styled.div`
    display: flex;
        
    align-items: center;
    justify-content: space-between;
        
    padding: 12px 20px;
    gap: 20px;

    background-color: var(--grey-2);

    border-radius: 5px 5px 0 0;
`

export const StyledAiOutlineClose = styled(AiOutlineClose)`
    color: var(--grey-1);
    cursor: pointer;
`