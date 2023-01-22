import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    a {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
      margin-left: 50px;
    }
  `}
`;
