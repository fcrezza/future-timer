import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./view/Header";
import ListInput from "./components/ListInput";

const GlobalStyle = createGlobalStyle`
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

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ListInput />
      </Container>
    </>
  );
};

export default App;
