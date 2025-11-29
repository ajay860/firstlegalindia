import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './app/store';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
// import { teal, deepOrange } from '@mui/material/colors';
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
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
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
            <Route path="/" element={<Layout />}>
              <Route index element={<Home className="page-enter" />} />
              <Route path="about" element={<About className="page-enter" />} />
              <Route path="services">
                <Route index element={<Services className="page-enter" />} />
                <Route path=":serviceType" element={<ServiceDetail className="page-enter" />} />
              </Route>
              <Route path="resources" element={<Resources className="page-enter" />} />
              <Route path="contact" element={<Contact className="page-enter" />} />
              <Route path="book-appointment" element={<BookAppointment className="page-enter" />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
