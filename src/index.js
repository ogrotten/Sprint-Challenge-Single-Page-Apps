import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

function clg(...x) { for (let exes of x) console.log(exes); }

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
