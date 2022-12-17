import styled, { css } from 'styled-components';
// import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
  `}
`;
