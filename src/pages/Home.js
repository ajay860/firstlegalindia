import { 
  Container, 
  Typography, 
  Box,  
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import { Row, Col } from "react-bootstrap"

import { 
  Check as CheckIcon, 
} from '@mui/icons-material';

import HeroSlider from '../components/HeroSlider';
import HomeAboutUs from '../components/Home/HomeAbout';
import ServicesSection from '../components/Home/ServicesSection';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import Testimonials from '../components/Home/Testimonials'
import ContactForm from '../components/ContactForm';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          <Row>
            <Col md={6} sm={12}>
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
            </Col>
            <Col md={6} sm={12}>
              <Box textAlign="center" mb={6}>
                <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                  Find Advisor
                </Typography>
                <Typography variant="p" component="p" gutterBottom>
                  We would love to hear from you
                </Typography>
                <ContactForm></ContactForm>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: 8, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Testimonials />
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;