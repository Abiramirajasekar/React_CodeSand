import React from "react";
import { Routes, Route } from "react-router-dom";
import { Listing } from "./Listing";
import { Login } from "./Login";

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/listing" element={<Listing />} />
    </Routes>
  );
};
