import styled from "styled-components";

export const List = styled.li`
    width: 100%;

    display: flex;

    align-items: center;
    justify-content: space-between;

    background-color: var(--grey-4);
    
    border-radius: 4px;

    padding: 16px 12px;

    cursor: pointer;
    
    :hover {
        background-color: var(--grey-2);
    }
`