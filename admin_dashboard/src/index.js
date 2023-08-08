import React from "react";
//In here we hook our react appliacationm to the real dom
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
