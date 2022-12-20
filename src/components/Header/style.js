import styled from "styled-components";

export const Container = styled.header`
    width: 100%;

    & div:last-child {
        height: 72px;

        display: flex;

        align-items: center;
        justify-content: ${({ children }) => (children.props.children[1]) ? "space-between" : "center"};
    }

    & div:last-child > button {
        width: max-content;
    }

    a {
        width: max-content;
    }

    img {
        width: 101px;

        @media(min-width: 768px) {
            width: 144px;
        }
    }
`