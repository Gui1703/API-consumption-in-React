import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const user = localStorage.getItem("userData");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Component />;
}

export default PrivateRoute;
