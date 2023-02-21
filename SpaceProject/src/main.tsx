import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage/HomePage";
import "../styles/global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
