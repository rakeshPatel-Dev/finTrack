import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user"); // check if signed up
  if (!user) {
    return <Navigate to="/signup" replace />;
  }
  return children;
};

export default ProtectedRoute;
