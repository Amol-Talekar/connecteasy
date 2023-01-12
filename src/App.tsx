import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { GlobalStyle } from "./styles/globalStyle";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
