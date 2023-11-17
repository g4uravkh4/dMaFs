import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Services from "../pages/Services";
import Doc from "../pages/Doc";
import DocDetails from "../pages/DocDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/services" element={<Services />} />
      <Route path="/doctors" element={<Doc />} />
      <Route path="/doctors/:id" element={<DocDetails />} />
    </Routes>
  );
};

export default Routers;
