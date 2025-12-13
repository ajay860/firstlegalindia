// src/pages/industry/IndustryDetail.js
import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom'

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

const IndustryDetail = () => {
  console.log("Test")
  const { industrySlug } = useParams();

  const stats = [
    { value: '900+', label: 'Client' },
    { value: '20+', label: 'Expert' },
    { value: '5+', label: 'Years' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Documentation',
      description: 'Submit required documents for verification',
    },
    {
      number: '2',
      title: 'Application Filing',
      description: 'We file your application with the concerned authority',
    },
    {
      number: '3',
      title: 'Registration',
      description: 'Receive your registration certificate',
    },
  ];

  const documents = [
    'Identity Proof (PAN Card, Aadhaar Card, etc.)',
    'Address Proof (Electricity Bill, Rent Agreement, etc.)',
    'Passport Size Photographs',
    'Business Address Proof',
    'No Objection Certificate (NOC) from the owner',
    'Board Resolution for Authorized Signatory',
    'Business Plan',
    'Financial Projections',
    'KYC Documents of Directors/Partners',
  ];


  useEffect(() => {

  }, [industrySlug]);


  return (
    <Box>
      {/* Hero Section */}
      
      <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #2f2f39 0%, #1a1a21 100%)',
        color: 'white',
        py: { xs: 6, md: 10 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            position: 'relative',
            zIndex: 1,
            maxWidth: '800px'
          }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            {'Asset Management Company Registration'}
          </Typography>
          
          <Typography 
            variant="h6" 
            sx={{ 
              fontSize: '1.25rem',
              opacity: 0.9,
              mb: 4,
              lineHeight: 1.6
            }}
          >
            Start your asset management business with our expert registration services. 
            We ensure a smooth and hassle-free process for your company formation.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '4px',
                textTransform: 'none',
                fontWeight: 600,
                fontSize: '1rem'
              }}
            >
              Get Started
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '4px',
                textTransform: 'none',
                fontWeight: 500,
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
      </Container>
      
      {/* Decorative elements */}
      <Box 
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          height: '100%',
          width: '40%',
          background: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.1) 100%)',
          display: { xs: 'none', md: 'block' }
        }}
      />
    </Box>
      
      <Box bgcolor="primary.main" color="white" py={8}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom>
            Microfinance Company Registration
          </Typography>
          <Typography variant="h6" maxWidth="800px">
            Start your microfinance business with our expert registration services. We ensure a smooth and hassle-free process.
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box py={6} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <StyledCard>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" color="textSecondary">
                    {stat.label}
                  </Typography>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Left Sidebar - Related Services */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Related Services
              </Typography>
              <List>
                {['NBFC Registration', 'Bank License', 'Payment Bank License', 'Small Finance Bank License'].map(
                  (service, index) => (
                    <ListItem button key={index} sx={{ py: 1, px: 0 }}>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={service} />
                    </ListItem>
                  )
                )}
              </List>
            </Paper>

            {/* Free Consultation Form */}
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Free Consultation by Expert
              </Typography>
              <form>
                <TextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Email"
                  type="email"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Phone"
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <TextField
                  fullWidth
                  label="Message"
                  multiline
                  rows={4}
                  variant="outlined"
                  margin="normal"
                  size="small"
                />
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Get Free Consultation
                </Button>
              </form>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Unlock Your Potential: Register Your Microfinance Company
            </Typography>
            <Typography variant="body1" paragraph>
              Starting a microfinance company is a great way to contribute to financial inclusion while building a sustainable business. Our comprehensive registration service ensures that you meet all regulatory requirements and get your business up and running smoothly.
            </Typography>

            {/* Steps Section */}
            <Box my={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Simple 3-Step Process
              </Typography>
              <Grid container spacing={3} mt={2}>
                {steps.map((step, index) => (
                  <Grid item xs={12} sm={4} key={index}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 3,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <Box
                        bgcolor="primary.main"
                        color="white"
                        width={40}
                        height={40}
                        borderRadius="50%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        mb={2}
                      >
                        {step.number}
                      </Box>
                      <Typography variant="h6" gutterBottom>
                        {step.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {step.description}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* Key Features */}
            <Box my={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Why Choose Us?
              </Typography>
              <List>
                {[
                  'Expert guidance throughout the registration process',
                  '100% transparency and no hidden charges',
                  'Fast and efficient service',
                  'Dedicated relationship manager',
                  'Post-registration support',
                ].map((feature, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>
            </Box>

            {/* Documents Required */}
            <Box my={6}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Documents Required
              </Typography>
              <TableContainer component={Paper} elevation={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>List of All Supporting Documents</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {documents.map((doc, index) => (
                      <TableRow key={index}>
                        <TableCell>{doc}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>

          {/* Right Sidebar - Contact Info */}
          <Grid item xs={12} md={3}>
            <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Contact Information
              </Typography>
              <Box mb={3}>
                <Box display="flex" alignItems="center" mb={2}>
                  <PhoneIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>+91 1234567890</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <EmailIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>info@example.com</Typography>
                </Box>
                <Box display="flex" alignItems="center">
                  <LocationOnIcon color="primary" sx={{ mr: 1 }} />
                  <Typography>123 Business Street, City, Country</Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<PhoneIcon />}
              >
                Call Now
              </Button>
            </Paper>

            {/* Why Choose Us */}
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom fontWeight="bold">
                Why Choose Us?
              </Typography>
              <List>
                {[
                  '10+ Years of Experience',
                  '5000+ Happy Clients',
                  '24/7 Customer Support',
                  'Affordable Pricing',
                  '100% Satisfaction Guarantee',
                ].map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <CheckCircleIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustryDetail;