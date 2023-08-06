import React from "react";
//In here we hook our react appliacationm to the real dom
import ReactDom from "react-dom";
import "./index.css";
import App from "./App";

ReactDom.render(<App />, document.getElementById("root"));
