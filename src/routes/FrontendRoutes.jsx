import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import ServiceLayout from "../components/Layout/ServiceLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/services";
import ServiceDetail from "../pages/services/detail/ServiceDetail";
import Resources from "../pages/resources";
import Contact from "../pages/Contact";
import IndustryDetail from "../pages/industry/IndustryDetail";

const FrontendRoutes = () => {
  return (
    <Routes>
      {/* Service / Industry Layout */}
      {/* <Route element={<ServiceLayout />}>
        <Route
          path=":serviceType"
          element={<ServiceDetail className="page-enter" />}
        />
        <Route
          path=":industry/:industrySlug"
          element={<IndustryDetail className="page-enter" />}
        />
      </Route> */}

      {/* Main Website Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home className="page-enter" />} />
        <Route path="about" element={<About className="page-enter" />} />

        {/* <Route path="services">
          <Route index element={<Services className="page-enter" />} />
          <Route
            path=":serviceType"
            element={<ServiceDetail className="page-enter" />}
          />
        </Route> */}

        <Route path="resources" element={<Resources className="page-enter" />} />
        <Route path="contact" element={<Contact className="page-enter" />} />
      </Route>
    </Routes>
  );
};

export default FrontendRoutes;
