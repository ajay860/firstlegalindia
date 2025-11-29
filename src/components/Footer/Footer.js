import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="primary" gutterBottom>
              First legal india private limited
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Providing expert tax and financial services to help your business grow.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography variant="subtitle1" gutterBottom>Quick Links</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/about" color="text.secondary" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/services" color="text.secondary" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link component={RouterLink} to="/contact" color="text.secondary" sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>Services</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/services/taxation" color="text.secondary" sx={{ mb: 1 }}>
                Taxation
              </Link>
              <Link component={RouterLink} to="/services/accounting" color="text.secondary" sx={{ mb: 1 }}>
                Accounting
              </Link>
              <Link component={RouterLink} to="/services/audit-assurance" color="text.secondary">
                Audit & Assurance
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>Contact</Typography>
            <Typography variant="body2" color="text.secondary">
               S-75 Yashwant Plaze <br /> 
               Near Railway Station Indore.<br />
              Email: psrco131@gmail.com<br />
              Phone: <Link href="tel:9977999663">9977999663</Link>
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
