import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

const appRoot = document.getElementById("root");
ReactDOM.render(
  <Router>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </Router>,
  appRoot
);
