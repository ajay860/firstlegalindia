// src/components/Layout/ServiceLayout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ServicesHeader from '../Header/ServicesHeader';
import Header from '../Header/Header';
import Footer from '../Footer';

const ServiceLayout = () => {
    const location = useLocation();
    const isServicePage = location.pathname.startsWith('/services') || location.pathname.startsWith('/industries');


    if (!isServicePage) {
        return (
            <>
                <Header />
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
            <Footer />
        </Box>
    );
};

export default ServiceLayout;