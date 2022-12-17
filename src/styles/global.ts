import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Author-Regular';
    src: url('../fonts/Author-Regular.woff2') format('woff2'),
        url('../fonts/Author-Regular.woff') format('woff'),
        url('../fonts/Author-Regular.ttf') format('truetype');
        font-weight: 400;
        font-display: swap;
        font-style: normal;
  }

  @font-face {
    font-family: 'Author-Semibold';
    src: url('../fonts/Author-Semibold.woff2') format('woff2'),
        url('../fonts/Author-Semibold.woff') format('woff'),
        url('../fonts/Author-Semibold.ttf') format('truetype');
        font-weight: 600;
        font-display: swap;
        font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    html,
    body,
    #__next {
      height: 100%;
    }
    body {
      font-family: ${theme.font.family};
    }
  `}
`;

export default GlobalStyles;
