import React, { Fragment, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StartPage from "./view/StartPage";
import Run from "./view/Run";
import { GlobalStyle, Container  } from './style/App'

export default function App() {
  const [timer, setTimer] = useState({ hour: "", minute: "", second: "" });
  const [isPlaying, setIsPlaying] = useState(false);

  return <BrowserRouter>
      <Fragment>
        <GlobalStyle />
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <StartPage timer={timer} setTimer={setTimer} setIsPlaying={setIsPlaying} isPlaying={isPlaying} {...props} />
              )}
            />
            <Route
              path="/run"
              render={props => <Run timer={timer} setIsPlaying={setIsPlaying} {...props} />}
            />
            <Route render={() => <h1>page not found</h1>} />
          </Switch>
        </Container>
      </Fragment>
    </BrowserRouter>
}