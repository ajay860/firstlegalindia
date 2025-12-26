import { BrowserRouter as Router } from "react-router-dom";

import FrontendRoutes from "./FrontendRoutes";
import AdminRoutes from "./AdminRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <FrontendRoutes />
      <AdminRoutes />
    </Router>
  );
};

export default AppRoutes;
