import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: 1rem;
    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;
export const TextArea = styled.textarea`
  ${({ theme }) => css`
    border-radius: 0.4rem;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    resize: none;
    font-family: ${theme.font.family};
    padding: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
  `}
`;

export const MapContent = styled.section`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    border-radius: 0.4rem;
    width: 100%;
    height: 290px;
  `}
`;
