import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: column;
`;
export const HeadBody = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0 0 500px 500px;
  `}
  height: 25vh;
  width: 100vw;
  display: flex;
`;

export const Content = styled.section`
  display: flex;
  padding: 1rem;

  gap: 10px;
`;

export const ContentImage = styled.img`
  border: solid 1px black;
  width: 100px;
  padding: 1rem;
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primary};
    border-radius: 1rem;
  `}
`;

export const ContentBody = styled.section`
  ${({ theme }) => css`
    span {
      font-weight: bold;
    }
    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
  display: column;
`;
