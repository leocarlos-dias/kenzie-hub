import styled from "styled-components";
import { Wrapper } from "../../styles/Wrapper";

export const Container = styled.form`
    width: 100%;

    & fieldset {
        display: flex;
        flex-direction: column;

        align-items: center;
        justify-content: flex-start;

        background-color: var(--grey-3);

        border:none;
        border-radius: 5px;
        box-shadow: 0px 3.5px 33px -8.1px rgba(0, 0, 0, 0.25);

        gap: 25px;
        padding: 30px 15px;
    }
`

export const FormWrapper = styled(Wrapper)`
    max-width: 520px;

`

export const Select = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    
    gap: 10px;

    & > label {
        width: 100%;
        
        display: block;

        color: var(--grey-0);

        font-weight: 400;
        font-size: 10px;
        line-height: 0px;

        @media(min-width: 768px) {
            font-size: 12px;
        }
    }

    & > select {
        width: 100%;
        height: 38px;

        display: block;

        background-color: var(--grey-2);
        color: var(--grey-1);

        border: none;
        border-radius: 4px;

        outline: var(--grey-0);

        padding: 0 16px;

        font-weight: 400;
        font-size: 13px;
        line-height: 21px;

        &:focus {
            color: var(--grey-0);
            border: 1.5px solid var(--grey-0);
        }

        @media (min-width: 768px) {
            height: 48px;

            font-size: 16px;
        }
}`

export const ButtonsColumn = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;

    gap: 25px;
`

export const ButtonsRow = styled(ButtonsColumn)`
        width: 100%;
        
        flex-direction: row;

        & > button:last-child {
            flex: 1;
        }
`