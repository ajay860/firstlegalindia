import { Routes, Route } from "react-router-dom"

import Layout from "../components/Layout/Layout"
import ServiceLayout from "../components/Layout/ServiceLayout"

import Home from "../pages/Home"
import About from "../pages/About"
import Services from "../pages/services"
import ServicePage from "../pages/ServicePage"
import Resources from "../pages/resources"
import Contact from "../pages/Contact"
import IndustryDetail from "../pages/industry/IndustryDetail"

const FrontendRoutes = () => {
  return (
    <Routes>
  <Route path="/services" element={<ServiceLayout />}>

  {/* /services */}
  <Route index element={<Services />} />

  {/* /services/our-services */}
  <Route path="our-services" element={<ServicePage />} />

  {/* /services/:industrySlug */}
  <Route path=":industrySlug" element={<IndustryDetail />} />

  {/* /services/:industry/:industrySlug */}
  <Route path=":industry/:industrySlug" element={<IndustryDetail />} />

</Route>

      {/* Main Website Layout */}
      <Route path='/' element={<Layout />}>
        <Route index element={<Home className='page-enter' />} />
        <Route path='about' element={<About className='page-enter' />} />
        <Route
          path='resources'
          element={<Resources className='page-enter' />}
        />
        <Route path='contact' element={<Contact className='page-enter' />} />
      </Route>
    </Routes>
  )
}

export default FrontendRoutes
