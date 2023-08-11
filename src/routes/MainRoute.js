import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Buy from "../pages/BrowseHome";
import ContactUs from "../pages/ContactUs";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Sell from "../pages/Sell";
import Protected from "./ProtectedRoute";

const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route
            path="/browse-home"
            element={<Protected Protecting={Buy} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default MainRoute;
