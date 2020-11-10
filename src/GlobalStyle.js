import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100vh;
    overflow-x:hidden;@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
  }
`;

export default GlobalStyle;
