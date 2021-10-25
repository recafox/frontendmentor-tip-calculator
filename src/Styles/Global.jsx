import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.active};
    font-family: 'Space Mono', monospace;
    margin: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyles;
