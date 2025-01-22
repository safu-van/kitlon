import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ProtectSignin from "./components/auth/ProtectSignin";
import ProtectDashboard from "./components/auth/ProtectDashboard";
import SigninPage from "./pages/auth/SigninPage";
import Dashboard from "./pages/labour-side/Dashboard";
import AdminLayout from "./layout/AdminLayout";
import SkuDetailsTable from "./components/admin-side/SkuDetailsTable";
import ApproveSku from "./components/admin-side/ApproveSku";
import LabourManagement from "./components/admin-side/LabourManagement";
import InventoryManagement from "./components/admin-side/InventoryManagement";

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
          <Route path="approve-sku" element={<ApproveSku />} />
          <Route path="labour-management" element={<LabourManagement />} />
          <Route path="inventory-management" element={<InventoryManagement />} />
          <Route path="payout-management" element={<SkuDetailsTable />} />
        </Route>

        <Route path="*" element={<Navigate to="/sign-in" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
