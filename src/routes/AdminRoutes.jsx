import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../components/Layout/AdminLayout";

import AdminLogin from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import ServiceDashboard from "../pages/admin/ServiceDashboard";
import ContactAdmin from "../pages/admin/Contact";

const AdminRoutes = () => {
  return (
    <Routes>
      {/* Public Admin Route */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected Admin Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/home-services" element={<ServiceDashboard />} />
          <Route path="/admin/contact" element={<ContactAdmin />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
