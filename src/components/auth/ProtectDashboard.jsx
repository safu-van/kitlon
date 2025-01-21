import React from "react";
import { getItem } from "../../utils/localStorage";
import { Navigate } from "react-router";

const ProtectDashboard = ({ children, role }) => {
  const user = getItem("user");

  if (!user || user.role !== role) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default ProtectDashboard;
