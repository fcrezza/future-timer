import React, { Fragment, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StartPage from "./view/StartPage";
import Run from "./view/Run";

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
  position: relative;
`;

function App() {
  const [timer, setTimer] = useState({ hour: "0", minute: "0", second: "10" });

  return (
    <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <StartPage {...props} {...{timer, setTimer}} />}
            />
            <Route
              path="/run"
              render={(props) => <Run {...props} timer={timer}/>}
            />
            <Route render={() => <h1>page not found</h1>} />
          </Switch>
        </Container>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
