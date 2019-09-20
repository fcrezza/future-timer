import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import TimeInput from "./components/TimeInput";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');

  * {
    box-sizing: border-box
  }

  body {
    margin: 0;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="hour">
        <TimeInput max={24} />
        Jam
      </div>
      <div className="minute">
        <TimeInput max={60} />
        Menit
      </div>
      <div className="second">
        <TimeInput max={60} />
        Detik
      </div>
    </>
  );
};

export default App;
