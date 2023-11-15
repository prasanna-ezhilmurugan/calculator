import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="container flex justify-center item-center h-screen bg-blue-300">
    <App />
  </div>
);
