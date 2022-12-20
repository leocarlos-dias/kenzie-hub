import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper"

export const StyledWrapper = styled(Wrapper)`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    padding: 15px;
    gap: 10px;

    @media (min-width: 768px) {
        flex-direction: row;

        justify-content: space-between;

        padding: 45px 15px;
    }
`

export const Container = styled.div`
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);    
`

export const Main = styled(Wrapper)`
    width: 100%;
    max-height: calc(100vh - 150px);

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 15px;
    padding: 15px;

    @media (min-width: 768px) {
        max-height: calc(100vh - 200px);
    }

    & > div {
        width: 100%;

        display: flex;
        
        align-items: center;
        justify-content: space-between;
        

        & > Button {
            padding: 0;

            height: 30px;
            width: 30px;
        }
    }

    ul {
        flex: 1;
        width: 100%;

        overflow-y: scroll;
        
        
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: flex-start;
        
        background-color: var(--grey-3);
        
        border-radius: 4px;
        
        padding: 25px 15px;
        gap: 15px;
    }
`

export const ButtonPlus = styled.div`
    
    height: 30px;
    width: 30px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: var(--grey-3);
    color: var(--grey-0);
    
    border-radius: 5px;
    border: 1.5px solid var(--grey-3);

    :hover{
        background-color: var(--grey-2);
        border: 1.5px solid var(--grey-2);
    };

    transition: 0.4s;
    cursor: pointer;
`

export const LoadSpinner = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 50px;
    gap: 50px;

    & > div:first-child > p {
        margin-bottom: 23px;
    }    
`