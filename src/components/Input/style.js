import styled from "styled-components";

export const Field = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;

    align-items: flex-start;
    justify-content: flex-start;

    gap: 15px;

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
    
    & > input {
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

export const Helper = styled.span`
    font-weight: 400;
    font-size: 10px;
    line-height: 0px;
    color:var(--grey-1);
`