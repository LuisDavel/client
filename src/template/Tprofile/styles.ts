import styled, { css } from 'styled-components';

export const Container = styled.main`
  display: column;
`;
export const ContentImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
export const ContetHead = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px 0;

  ${({ theme }) => css`
    background: ${theme.colors.primary};
    border-radius: 0 0 500px 500px;
    height: 200px;
    margin-bottom: 50px;
    nav {
      display: flex;
      justify-content: center;
      width: 100%;
      gap: 1rem;
      a {
        text-decoration: none;
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.medium};
        font-weight: bold;
      }
    }
  `}
`;
