// src/pages/About.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Button
} from '@mui/material';
import {
  GppGood as GppGoodIcon,
  People as TeamIcon,
  TrendingUp as TrendingUpIcon,
  EmojiEvents as ExcellenceIcon,
  Handshake as PartnershipIcon,
  AccountBalance as FinanceIcon
} from '@mui/icons-material';

const teamMembers = [
  {
    name: 'CA Rajesh Sharma',
    role: 'Founder & Managing Partner',
    expertise: 'Taxation & Compliance',
    avatar: 'R'
  },
  {
    name: 'Neha Patel',
    role: 'Senior Tax Consultant',
    expertise: 'GST & Indirect Taxation',
    avatar: 'N'
  },
  {
    name: 'Amit Desai',
    role: 'Audit Director',
    expertise: 'Statutory & Internal Audit',
    avatar: 'A'
  }
];

const values = [
  {
    icon: <GppGoodIcon fontSize="large" color="primary" />,
    title: 'Integrity and Excellence',
    description: 'We uphold the highest ethical standards and deliver quality in every service.'
  },
  {
    icon: <PartnershipIcon fontSize="large" color="primary" />,
    title: 'Commitment to Clients',
    description: 'Your success is our priority. We build lasting relationships based on trust.'
  },
  {
    icon: <GppGoodIcon fontSize="large" color="primary" />,
    title: 'Professional Transparency',
    description: 'Clear communication and honest advice at every step of our engagement.'
  },
  {
    icon: <TrendingUpIcon fontSize="large" color="primary" />,
    title: 'Continuous Improvement',
    description: 'We stay updated with the latest regulations and industry best practices.'
  }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(135deg, rgba(0, 105, 92, 0.9) 0%, rgba(0, 137, 123, 0.9) 100%)',
            zIndex: 1
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              lineHeight: 1.2
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            We are a trusted Chartered Accountancy firm committed to delivering accurate, ethical, and reliable financial services.
          </Typography>
        </Container>
      </Box>

      {/* Introduction Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Our Office"
                sx={{
                  width: '100%',
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  position: 'relative',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: -12,
                    width: 80,
                    height: 4,
                    bgcolor: 'primary.main',
                    borderRadius: 2
                  }
                }}
              >
                Our Story
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 3, fontSize: '1.1rem' }}>
                With years of experience and a client‑centric approach, we support individuals, small businesses, and enterprises through every stage of their financial journey.
              </Typography>
              <Typography variant="body1" paragraph sx={{ mb: 4, fontSize: '1.1rem' }}>
                Our mission is to simplify financial compliance and empower businesses through expert insights and timely solutions.
              </Typography>
              <Box
                sx={{
                  p: 3,
                  bgcolor: 'primary.light',
                  color: 'primary.contrastText',
                  borderRadius: 2,
                  borderLeft: '4px solid',
                  borderColor: 'primary.main'
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                  Why Choose Us?
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  We combine technical expertise with a deep understanding of your business to deliver personalized financial solutions.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Values Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'grey.50' }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Our Values
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: 4,
                borderRadius: 2
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Guiding principles that define our work ethic and approach
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bgcolor: 'primary.light',
                      color: 'primary.contrastText',
                      borderRadius: '50%'
                    }}
                  >
                    {value.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 700, mb: 2 }}
            >
              Meet the Team
            </Typography>
            <Divider
              sx={{
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                mx: 'auto',
                mb: 4,
                borderRadius: 2
              }}
            />
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 700, mx: 'auto' }}
            >
              Our team consists of qualified Chartered Accountants, tax experts, audit specialists, and financial consultants dedicated to providing personalized support.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    p: 4,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: 3
                    }
                  }}
                >
                  <Avatar
                    sx={{
                      width: 120,
                      height: 120,
                      mx: 'auto',
                      mb: 3,
                      fontSize: '3rem',
                      bgcolor: 'primary.main'
                    }}
                  >
                    {member.avatar}
                  </Avatar>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {member.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="primary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {member.role}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.expertise}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3 }}
          >
            Ready to Work With Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, opacity: 0.9 }}>
            Let's discuss how we can help you achieve your financial goals.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="/contact"
            sx={{
              px: 5,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              textTransform: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: 3
              }
            }}
          >
            Get in Touch
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default About;