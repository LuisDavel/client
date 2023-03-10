import styled, { css, DefaultTheme } from 'styled-components';
import { darken } from 'polished';

import { ButtonProps } from '.';

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'minimal'>;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    background: none;
    color: ${theme.colors.primary};

    &:hover {
      color: ${darken(0.1, theme.colors.primary)};
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, minimal, disabled }) => css`
    margin-top: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};
    color: white;
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.lightGray};
    }

    &:hover {
      filter: brightness(90%);
      z-index: 1;
    }
    span: {
      z-index: 2;
    }

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!minimal && wrapperModifiers.minimal(theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`;
