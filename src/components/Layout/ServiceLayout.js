// src/components/Layout/ServiceLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container, useTheme,
  useMediaQuery, } from '@mui/material';
import ServicesHeader from '../Header/ServicesHeader';
import Header from '../Header/Header';
import SubHeader from '../Header/SubHeader'
const ServiceLayout = () => {

    console.log("APP");
    const location = useLocation();
    const isServicePage = location.pathname.startsWith('/services') ||
        location.pathname.startsWith('/industries');
const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));


    if (!isServicePage) {
        return (
            <>
                <Header />
                {!isMobile && <SubHeader />}
                <Box component="main">
                    <Outlet />
                </Box>
            </>
        );
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <ServicesHeader />
            <Box component="main" sx={{ flexGrow: 1, py: 4 }}>
                <Container maxWidth="xl">
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default ServiceLayout;