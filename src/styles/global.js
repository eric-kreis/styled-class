import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    * {
      padding: 0;
      margin: 0;
    }
  }

  html {
    position: relative;
    min-height: 100vh;
  }
`;
