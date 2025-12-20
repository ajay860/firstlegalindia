import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import { teal, deepOrange } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import components
import Layout from './components/Layout/Layout';
import ServiceLayout  from './components/Layout/ServiceLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import ServiceDetail from './pages/services/detail/ServiceDetail';
import Resources from './pages/resources';
import Contact from './pages/Contact';
import IndustryDetail from './pages/industry/IndustryDetail';

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminLayout from "./components/Layout/AdminLayout";

import AdminLogin from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";

import ServiceDashboard from "./pages/admin/ServiceDashboard";
import ContactAdmin from "./pages/admin/Contact";

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2f2f39',
      light: '#585862',
      dark: '#080814',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ea1b3d',
      light: '#ff5e68',
      dark: '#b0001a',
      contrastText: '#fff',
    },
    mode: 'light',
    light: '#E9E9E9',
    service: '#E9E9E9'
  },
  typography: {
    fontFamily: '"Outfit", sans-serif',
    body: {
      fontSize: "16px",
      color: '#2f2f39',
    },
    bodySecondary: {
      fontSize: "16px",
      color: '#ea1b3d',
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '&.page-enter': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '&.page-enter-active': {
            opacity: 1,
            transform: 'translateY(0)',
            transition: 'opacity 300ms, transform 300ms',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route element={<ServiceLayout />}>
              <Route path=":serviceType" element={<ServiceDetail className="page-enter" />} />
              <Route path="/:industry/:industrySlug" element={<IndustryDetail className="page-enter"/>} />
            </Route>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home className="page-enter" />} />
              <Route path="about" element={<About className="page-enter" />} />
              <Route path="services">
                <Route index element={<Services className="page-enter" />} />
                <Route path=":serviceType" element={<ServiceDetail className="page-enter" />} />
              </Route>
              <Route path="resources" element={<Resources className="page-enter" />} />
              <Route path="contact" element={<Contact className="page-enter" />} />
            </Route>
            
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index  path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/service" element={<ServiceDashboard />} />
                <Route path="/admin/contact" element={<ContactAdmin />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
