import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        // bgcolor: 'background.paper',
        py: 6,
        borderTop: '1px solid',
        borderColor: 'divider',
        mt: 'auto',
        bgcolor: 'primary.main', 
        color: 'white',
        fontSize: '1.1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid className="row" spacing={4}>
          <Grid className="col-sm-3" xs={12} md={2}>
            <Typography variant="subtitle1" gutterBottom>Company</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/about" className="text-white" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/services" className="text-white" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link component={RouterLink} to="/contact" className="text-white" sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
           <Grid className="col-sm-3" xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>Our Services</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/services/taxation" className="text-white" sx={{ mb: 1 }}>
                Business Registration
              </Link>
              <Link component={RouterLink} to="/services/accounting" className="text-white" sx={{ mb: 1 }}>
                Tax & Compliance
              </Link>
              <Link component={RouterLink} to="/services/audit-assurance" className="text-white" sx={{ mb: 1 }}>
                Trademark & IP
              </Link>
              <Link component={RouterLink} to="/services/audit-assurance" className="text-white" sx={{ mb: 1 }}>
                Lawyer Services
              </Link>
              <Link component={RouterLink} to="/services/audit-assurance" className="text-white" sx={{ mb: 1 }}>
                Documentation
              </Link>
              <Link component={RouterLink} to="/services/audit-assurance" className="text-white" sx={{ mb: 1 }}>
                Others
              </Link>
            </Box>
          </Grid>
          <Grid className="col-sm-3" xs={12} md={2}>
            <Typography variant="subtitle1" gutterBottom>Resources</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link component={RouterLink} to="/about" className="text-white" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/services" className="text-white" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link component={RouterLink} to="/contact" className="text-white" sx={{ mb: 1 }}>
                Contact Us
              </Link>
            </Box>
          </Grid>
         
          <Grid className="col-sm-3" xs={12} md={3}>
            <Typography variant="subtitle1" gutterBottom>Office</Typography>
            <Typography className="text-white mb-2" variant="subtitle1">
                <Link href="tel:8818888744" className="text-white">+91 8818888744</Link>
            </Typography>
            <Typography className="text-white mb-2" variant="subtitle1">
              psrco131@gmail.com
            </Typography>
            <Typography className="text-white" variant="subtitle1">
               S-75 Yashwant Plaze <br /> 
               Near Railway Station Indore.
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography className="text-white" align="center">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
