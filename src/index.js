import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import { App2 } from "./App2"

ReactDOM.render(
  <BrowserRouter>
    {/* <App /> */}
    <App2 />
  </BrowserRouter>,
  document.getElementById("root")
);
