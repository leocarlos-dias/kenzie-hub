import { css } from "styled-components"

export const modifierText = {
  small: () => css`
      font-size: 0.75rem;

      @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  `,

  medium: () => css`
    font-size: 0.875rem;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  `,

  large: () => css`
    font-size: 1rem;

    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  `,

  bold: () => css`
    font-weight: 700;
  `,

  semiBold: () => css`
    font-weight: 600;
  `,

  regular: () => css`
    font-weight: 600;
  `,

  primary: () => css`
      color: var(--color-primary);
    `,

  grey1: () => css`
      color: var(--grey-1);
      `,

  grey0: () => css`
      color: var(--grey-0);
    `,
}
