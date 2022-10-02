import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props) =>
      props.darkMode ? "rgb(18, 18, 18)" : "rgb(236, 236, 236)"};
    color: ${(props) =>
      props.darkMode ? "rgb(236, 236, 236)" : "rgb(18, 18, 18)"};;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle darkMode />
    <Router>
      <App />
    </Router>
  </>
);
