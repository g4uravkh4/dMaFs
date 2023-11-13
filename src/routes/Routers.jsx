import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routers;
