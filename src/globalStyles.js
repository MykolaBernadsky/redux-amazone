import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
    font-size: 62.5%;
    box-sizing: border-box;
  }

  body, #root{
    height: 100vh;
    margin: 0;
  }

  body, input, select, textarea, button {
    font-size: 1.6rem;
    font-family: Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
  }
`;
