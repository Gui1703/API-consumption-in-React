import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../containers/Login";
import Register from "../containers/Register";
import Home from "../containers/Home";
import PrivateRoute from "./private-route";
import FinalSpace from "../containers/FinalSpace"
import RickAndMorty from "../containers/RickAndMorty"

export default function myRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRoute component={Home} />} />
        <Route path="/final-space" element={<PrivateRoute component={FinalSpace} />} />
        <Route path="/rick-and-morty" element={<PrivateRoute component={RickAndMorty} />} />
      </Routes>
    </Router>
  );
}
