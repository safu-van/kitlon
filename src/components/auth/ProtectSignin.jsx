import React from "react";
import { getItem } from "../../utils/localStorage";
import { Navigate } from "react-router";

const ProtectSignin = ({ children }) => {
  const user = getItem("userData");

  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" />;
  }

  if (user?.role === "labour") {
    return <Navigate to="/labour" />;
  }

  return children;
};

export default ProtectSignin;
