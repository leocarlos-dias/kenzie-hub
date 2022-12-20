import styled, { css } from "styled-components";
import { modifierText } from "./style";

export const Title1 = styled.h1`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`

export const Title2 = styled.h2`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`

export const Title3 = styled.h3`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`

export const Headline = styled.p`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`

export const Text = styled.span`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`

export const Label = styled.label`
    font-size: ${({ size }) => !!size && `${size}px`};

    ${({ color, pattern, weight }) => css`
        ${!!color && modifierText[color]()}
        ${!!pattern && modifierText[pattern]()}
        ${!!weight && modifierText[weight]()}
    `}
`
