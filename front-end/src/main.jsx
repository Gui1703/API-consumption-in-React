import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";
import Global from "./style/GlobalStyles";
import { UserProvider } from "./hook/UserContext";

ReactDOM.render(
  <>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} theme="dark" />
    <Global />
  </>,
  document.getElementById("root")
);
