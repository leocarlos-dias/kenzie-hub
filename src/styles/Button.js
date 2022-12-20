
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const modifierButton = {
  primary: () => css`
      background-color: var(--color-primary);
      border: 1.5px solid var(--color-primary);
      color: var(${({ theme }) => theme.title === "dark" ? "--grey-0" : "--grey-4"});

      :hover{
        background-color: var(--color-primary-focus);
        border: 1.5px solid var(--color-primary-focus);
      }

      :disabled {
        background-color: var(--color-primary-disabled);
        border: 1.5px solid var(--color-primary-disabled);
        cursor: not-allowed;
      }
    `,

  grey: () => css`
      background-color: var(--grey-1);
      border: 1.5px solid var(--grey-1);
      color: var(${({ theme }) => theme.title === "dark" ? "--grey-0" : "--grey-4"});

      :hover{
        background-color: var(--grey-2);
        border: 1.5px solid var(--grey-2);
      }
      
      :disabled {
        background-color: var(--color-grey-4);
        border: 1.5px solid var(--color-grey-4);
        cursor: not-allowed;
      }
    `,

  small: () => css`
      background-color: var(--grey-2);
      border: 1.5px solid var(--grey-2);
      color: var(${({ theme }) => theme.title === "dark" ? "--grey-0" : "--grey-4"});

      :hover{
        background-color: var(--grey-2);
        border: 1.5px solid var(--grey-2);
      }
    `
}

export const Button = styled.button`
    width: 100%;
    height: 38px;

    border-radius: 5px;

    padding: 0 22px;
    
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;

    ${({ color }) => css`
        ${!!color && modifierButton[color]()};
    `}

    @media (min-width: 768px) {
        height: 48px;

        font-size: 16px;
    }
    
    transition: 0.4s;
`

export const StyledLink = styled(Link)`
    display: flex;
    
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 38px;

    color: var(--grey-0);
    
    border-radius: 5px;

    padding: 0 22px;
    
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;

    ${({ color }) => css`
        ${!!color && modifierButton[color]()}
    `}

    @media (min-width: 768px) {
        height: 48px;

        font-size: 16px;
    }
    
    transition: 0.4s;

    ${({ disabled }) => disabled && css`
      background-color: var(--grey-4);
      border-color: var(--grey-4);
      color: var(--grey-1);
      pointer-events: none;
    `}
  `

