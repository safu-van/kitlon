import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import SigninPage from "./pages/auth/SigninPage";
import Dashboard from "./pages/labour-side/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import ProtectSignin from "./components/auth/ProtectSignin";
import ProtectDashboard from "./components/auth/ProtectDashboard";
import SkuDetailsTable from "./components/admin-side/SkuDetailsTable";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/sign-in" />} />
        <Route
          path="/sign-in"
          element={
            // <ProtectSignin>
            <SigninPage />
            // </ProtectSignin>
          }
        />

        <Route
          path="/labour"
          element={
            // <ProtectDashboard role="labour">
            <Dashboard />
            // </ProtectDashboard>
          }
        />

        <Route
          path="/admin"
          element={
            // <ProtectDashboard role="admin">
            <AdminLayout />
            // </ProtectDashboard>
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<SkuDetailsTable />} />
          <Route path="user-management" element={<SkuDetailsTable />} />
          <Route path="inventory-management" element={<SkuDetailsTable />} />
          <Route path="payout-management" element={<SkuDetailsTable />} />
        </Route>

        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
