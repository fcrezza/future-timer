import React, { useState, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./view/Header";
import ListInput from "./components/ListInput";
import ListItem from "./view/ListItem";

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
  max-width: 500px;
  margin: 0 auto;
`;

const App = () => {
  const [timer, setTimer] = useState({hour: "", minute: "", second: ""})
  const [edit, setEdit] = useState(false);
  const [lists, setLists] = useState([
    {
      id: 1,
      name: "Lari",
      duration: {
        hour: 1,
        minute: 5,
        second: 30
      }
    }
  ]);

  const handleToggle = () => {
    setEdit(prev => !prev);
  };

  return (
    <Fragment>
      <GlobalStyle />
      <Container>
        <Header />
        <ListInput {...{timer, setTimer}}/>
        <ListItem isEdited={edit} {...{handleToggle, lists}}/>
      </Container>
    </Fragment>
  );
};

export default App;
