import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import AdminLayout from "../components/Layout/AdminLayout";

import AdminLogin from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";

import HomeServiceSlider from '../pages/admin/home-service-slider/index'
import Categories from "../pages/admin/categories";
import AllServices from '../pages/admin/all-serivces'
import ContactUs from '../pages/admin/contact-us'
import AddCategory from "../pages/admin/add-category";
import AddServices from '../pages/admin/add-services';
import AddCategoryForm from '../pages/admin/add-category/edit-category'

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
          <Route path="/admin/add-category" element={<AddCategory />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/edit-category/:menuKey" element={<AddCategoryForm />} />
          <Route path="/admin/all-services" element={<AllServices />} />
          <Route path="/admin/add-services" element={<AddServices />} />
          <Route path="/admin/edit-service/:id" element={<AddServices />} />
          <Route path="/admin/service-slider-data" element={<HomeServiceSlider />} />
          <Route path="/admin/contact" element={<ContactUs />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
