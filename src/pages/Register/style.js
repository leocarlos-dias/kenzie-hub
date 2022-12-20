import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";

export const Container = styled.div`
    min-height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 15px;
`

export const StyledWrapper = styled(Wrapper)`
    max-width: 520px;
    
    padding: 0;
`