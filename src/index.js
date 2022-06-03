import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext/AuthContext";
// import {AuthContext} from '../src/context/AuthContext/'

const root = ReactDOM.createRoot(document.getElementById("root"));
// const { user } = useContext(AuthContext);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);