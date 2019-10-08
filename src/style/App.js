import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    background: #f8f8f8;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 520px;
  padding: 0 1.5rem;
  margin: 0 auto;
  position: relative;
`;