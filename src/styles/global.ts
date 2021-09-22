import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
      overflow-x: hidden;
      
      font-size: 1.6rem;
    }

    body, button, input, text-area {
        font-family: 'Roboto', sans-serif;
    } 

    button, input, text-area {
        border: none;
    }

    ul, li, ol, a {
      text-decoration: none;
      list-style: none;
    } 
`;