import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --toastify-color-dark: #343B41;
        
        --color-primary: ${({ theme }) => theme.colors.primary};
        --color-primary-focus: ${({ theme }) => theme.colors.primaryFocus};
        --color-primary-disabled: ${({ theme }) => theme.colors.primaryDisabled};
        --grey-4: ${({ theme }) => theme.colors.grey4};
        --grey-3: ${({ theme }) => theme.colors.grey3};
        --grey-2: ${({ theme }) => theme.colors.grey2};
        --grey-1: ${({ theme }) => theme.colors.grey1};
        --grey-0: ${({ theme }) => theme.colors.grey0};
        
        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Inter', sans-serif;

        * ::-webkit-scrollbar {
            width: 9px;
        }

        *::-webkit-scrollbar-thumb {
            background-color: #121214;
            border-radius: 5px;
            border: 2px solid var(--grey-3);
        }
    }

    body {
        height: 100vh;

        background-color: var(--grey-4);
        color: var(--grey-0);
    }

    li {
        list-style: none
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: pointer;
        outline: none;
    }
`;