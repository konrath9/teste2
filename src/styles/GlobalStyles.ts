import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--color-white);
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Roboto, sans-serif; 
  }
  :root {
    --color-primary: #f29200;
    --color-secondary: #006a6a;
    --color-black: #333;
    --color-white: #FFF;
    --color-gray: #666;
    --color-blue: #3483fa;
  }
`;
