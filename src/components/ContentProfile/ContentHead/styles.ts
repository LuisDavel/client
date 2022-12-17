import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.main`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xsmall};
    display: flex;

    ${media.lessThan('small')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;

export const ImagenProfile = styled.img`
  ${({ theme }) => css`
    border-radius: 1rem;
    border: 2px solid ${theme.colors.primary};
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Profile = styled.section`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xxsmall};
  `}
`;

export const TextProfile = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: 'space-between';
    gap: ${theme.spacings.xsmall};
  `}
`;

export const ContentButton = styled.section`
  ${({ theme }) => css`
    padding-top: ${theme.spacings.xxsmall};
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.xxsmall};

    ${media.lessThan('small')`
      padding-top: 0;
      justify-content: center;
    `}
  `}
`;
