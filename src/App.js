import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { teal, deepOrange } from '@mui/material/colors';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/services';
import ServiceDetail from './pages/services/detail/ServiceDetail';
import Resources from './pages/resources';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: teal,
    secondary: deepOrange,
    mode: 'light',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services">
                <Route index element={<Services />} />
                <Route path=":serviceType" element={<ServiceDetail />} />
              </Route>
              <Route path="resources" element={<Resources />} />
              <Route path="contact" element={<Contact />} />
              <Route path="book-appointment" element={<BookAppointment />} />
              {/* Add more routes here as needed */}
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
