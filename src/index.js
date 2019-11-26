import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const appRoot = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  appRoot
);
