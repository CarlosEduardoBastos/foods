import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font: 400 1rem Nunito, sans-serif;
    }
    html {
      font-family: ${theme.fonts.family.default};
    }
    a {
      text-decoration: none;
    }
  `}
`;
