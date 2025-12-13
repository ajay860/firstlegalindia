import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import SubHeader from '../Header/SubHeader'
import {
  Box,
  useTheme,
  useMediaQuery,
} from '@mui/material';


const Layout = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {!isMobile && <SubHeader />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* {children} */}
         <Outlet /> 
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
