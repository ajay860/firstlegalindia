// src/pages/Home.js
import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Button, 
  Grid, 
  Card, 
  CardContent, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  useMediaQuery,
  Paper,
  Divider
} from '@mui/material';
import { 
  Check as CheckIcon, 
  Groups as GroupsIcon,
  GppGood as SecurityIcon,
  Receipt as ReceiptIcon,
  AccessTime as TimeIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  Store as StoreIcon,
  RocketLaunch as StartupIcon,
  Apartment as CorpIcon,
  VolunteerActivism as NgoIcon,
  Search as SearchIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import HomeAboutUs from '../components/Home/HomeAbout';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // const services = [
  //   { icon: <ReceiptIcon color="primary" />, title: 'Income Tax Filing & Tax Planning' },
  //   { icon: <ReceiptIcon color="primary" />, title: 'GST Registration & Filing' },
  //   { icon: <ReceiptIcon color="primary" />, title: 'Complete Accounting & Bookkeeping' },
  //   { icon: <SearchIcon color="primary" />, title: 'Statutory & Internal Audit' },
  //   { icon: <BusinessIcon color="primary" />, title: 'Business Registration & ROC Compliance' },
  //   { icon: <TrendingUpIcon color="primary" />, title: 'Financial & Business Advisory' }
  // ];

  const strengths = [
    { value: '10+', label: 'Years of Experience' },
    { value: '500+', label: 'Clients Served' },
    { value: '100%', label: 'Compliance Rate' },
    { value: '24/7', label: 'Support' }
  ];

  const benefits = [
    'Individuals & Salaried Employees',
    'Small & Medium Businesses',
    'Startups & Entrepreneurs',
    'Corporates & Partnership Firms',
    'NGOs & Trusts'
  ];

  const clients = [
    { icon: <PersonIcon />, title: 'Individuals & Salaried Employees' },
    { icon: <StoreIcon />, title: 'Small & Medium Businesses' },
    { icon: <StartupIcon />, title: 'Startups & Entrepreneurs' },
    { icon: <CorpIcon />, title: 'Corporates & Partnership Firms' },
    { icon: <NgoIcon />, title: 'NGOs & Trusts' }
  ];

  const testimonials = [
    {
      text: "Very professional and quick filing service. Saved me a lot of time.",
      author: "Client"
    },
    {
      text: "Perfect consulting for my startup, from registration to compliance.",
      author: "Client"
    }
  ];


  return (
    <Box>
      {/* Hero Section */}
      <HeroSlider 
        title="Your Trusted CA Partner for Growth & Compliance"
        subtitle="Managing finances, taxes, and legal compliance can be complex. We simplify the entire process so you can focus on growing your business."
        buttonText="Book Free Consultation"
      />
      <HomeAboutUs />

      {/* Services Section */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Our Services
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
              We provide end-to-end financial and compliance solutions
            </Typography>
          </Box>
          <ServicesSection />
        </Container>
      </Box>
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <WhyChooseUs />
        </Container>
      </Box>
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          {/* <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              Our Core Strengths
            </Typography>
          </Box> */}
          
          <Grid container spacing={4} justifyContent="center">
            {strengths.map((strength, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box textAlign="center" p={3}>
                  <Typography variant="h3" color="primary" gutterBottom>
                    {strength.value}
                  </Typography>
                  <Typography variant="subtitle1">
                    {strength.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Why Choose Us */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box sx={{ textAlign:'center' }}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: { xs: 'center', md: 'left' }  }}>
                  Who We Serve
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign={'left'} paragraph>
                  Stay up-to-date. Explore our blog & articles infused with <br></br> compliance and registration solutions.
                </Typography>
                
                <List>
                  {benefits.map((benefit, index) => (
                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                      <ListItemIcon sx={{ minWidth: 36, color: 'primary.main' }}>
                        <CheckIcon />
                      </ListItemIcon>
                      <ListItemText 
                        primary={benefit}
                        primaryTypographyProps={{ variant: 'body1' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
              <Box textAlign="center" mb={6}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Find Advisor
                </Typography>
                <Typography variant="p" component="p" gutterBottom>
                  We would love to hear from you
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
              What Our Clients Say
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card sx={{ p: 4, height: '100%' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ 
                      width: 48, 
                      height: 48, 
                      bgcolor: 'primary.light', 
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                      color: 'primary.contrastText'
                    }}>
                      <PersonIcon />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {testimonial.author}
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary">
                    "{testimonial.text}"
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      {/* <Box sx={{ py: 8, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
            Ready to Simplify Your Financial Needs?
          </Typography>
          <Typography variant="h6" sx={{ mb: 6, opacity: 0.9 }}>
            Book a Free Appointment and talk to our expert Chartered Accountant today.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            sx={{ 
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              textTransform: 'none',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 6,
              }
            }}
          >
            Book Free Consultation
          </Button>
        </Container>
      </Box> */}
    </Box>
  );
};

export default Home;