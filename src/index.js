import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import { ThemeProvider } from "styled-components";

import GlobalStyles from "./theme/GlobalStyle";
import Theme from "./theme/theme";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
