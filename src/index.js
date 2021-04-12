import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
//import Menu from "./components/menu";
import App from "./components/app";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "./normalize.css";
import "./meanmenu.css";
import "./slick.css";
import "./niceselect.css";
//import "./style.scss";
import "./index.css";
import "./responsive.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
