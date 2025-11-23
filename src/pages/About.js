// src/pages/About.js
import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  Avatar,
  useTheme,
  useMediaQuery,
  Button,
  useScrollTrigger,
  CardContent
} from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Phone as PhoneIcon,
  GppGood as GppGoodIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Handshake as HandshakeIcon,
  AccountBalance as FinanceIcon
} from '@mui/icons-material';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const teamMembers = [
  {
    name: 'John Doe',
    role: 'CEO & Founder',
    avatar: 'JD'
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    avatar: 'JS'
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Developer',
    avatar: 'MJ'
  },
  {
    name: 'Sarah Williams',
    role: 'Design Lead',
    avatar: 'SW'
  }
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      > */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #00695c 0%, #00897b 100%)',
            color: 'white',
            py: { xs: 12, md: 16 },
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%)',
              zIndex: 1
            }
          }}
        >
          <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
            {/* <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            > */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  lineHeight: 1.1,
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="h4"
                component="p"
                sx={{
                  maxWidth: '800px',
                  mx: 'auto',
                  opacity: 0.9,
                  lineHeight: 1.6,
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  mb: 3,
                  fontWeight: 400
                }}
              >
                Legal made simple. Compliance without confusion.
              </Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{
                  maxWidth: '700px',
                  mx: 'auto',
                  opacity: 0.85,
                  fontStyle: 'italic',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  mb: 2,
                  fontWeight: 300
                }}
              >
                "Grow freely. We handle the rest."
              </Typography>
            {/* </motion.div> */}
          </Container>
        </Box>
      {/* </motion.div> */}

      {/* Introduction Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                {/* <motion.div variants={fadeInUp}> */}
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt="Our Office"
                    sx={{
                      width: '100%',
                      borderRadius: 4,
                      boxShadow: 6,
                      transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                      '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: 12
                      }
                    }}
                  />
                {/* </motion.div> */}
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                {/* <motion.div variants={fadeInUp}> */}
                  <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                      position: 'relative',
                      display: 'inline-block',
                      '&:after': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        bottom: -8,
                        width: '60px',
                        height: '4px',
                        background: 'linear-gradient(90deg, #00897b, #4db6ac)',
                        borderRadius: '4px'
                      }
                    }}
                  >
                    Our Story
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      mb: 3,
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary'
                    }}
                  >
                    We make legal, tax, and compliance services simple, easy, and affordable for growing businesses. We are redefining how businesses handle tax, compliance, and legal services. With a focus on simplicity and speed, we help growing businesses stay compliant while they focus on scaling.
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      mb: 4,
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      color: 'text.secondary'
                    }}
                  >
                    We provide simple, reliable, and legal solutions for tax, compliance, and business registrations. Our goal is to support and empower growing businesses with transparency and accuracy.
                  </Typography>
                {/* </motion.div> */}

                {/* <motion.div variants={fadeInUp}> */}
                  <Box
                    sx={{
                      p: 4,
                      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                      borderRadius: 3,
                      borderLeft: '4px solid',
                      borderColor: 'primary.main',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, color: 'primary.dark' }}>
                      Our Mission
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      To make legal and compliance services effortless for every business and individual in India - simple, accessible, and technology-driven. We promise fast response, trusted support, and a seamless experience every time.
                    </Typography>
                  </Box>
                {/* </motion.div> */}
              </Grid>
            </Grid>
          {/* </motion.div> */}
        </Container>
      </Box>

      {/* What Makes Us Different */}
      <Box sx={{ py: { xs: 12, md: 14 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Box textAlign="center" mb={8}>
              {/* <motion.div variants={fadeInUp}> */}
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{
                    display: 'inline-block',
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 2,
                    color: 'primary.main',
                    fontSize: '0.9rem'
                  }}
                >
                  WHY CHOOSE US
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    lineHeight: 1.2,
                    maxWidth: '800px',
                    mx: 'auto',
                    mb: 3
                  }}
                >
                  What makes us the right choice for you
                </Typography>
                <Box
                  sx={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00897b, #4db6ac)',
                    borderRadius: '4px',
                    mx: 'auto',
                    mb: 4
                  }}
                />
              {/* </motion.div> */}
            </Box>

            <Grid container spacing={4} sx={{ mb: 8 }}>
              {[
                { 
                  icon: <GppGoodIcon sx={{ color: 'primary.main', fontSize: 40 }} />,
                  title: 'Expertise & Experience',
                  description: 'Our team of professionals brings years of experience in legal, tax, and compliance services, ensuring you get the best advice and support.'
                },
                { 
                  icon: <PeopleIcon sx={{ color: 'primary.main', fontSize: 40 }} />,
                  title: 'Client-Centric Approach',
                  description: 'We prioritize your needs and work closely with you to understand your business goals and challenges.'
                },
                { 
                  icon: <TrendingUpIcon sx={{ color: 'primary.main', fontSize: 40 }} />,
                  title: 'Growth Focused',
                  title: 'Growth Focused',
                  description: 'Our solutions are designed to help your business scale while maintaining compliance every step of the way.'
                },
                { 
                  icon: <HandshakeIcon sx={{ color: 'primary.main', fontSize: 40 }} />,
                  title: 'Trusted Partnership',
                  description: 'We build long-term relationships based on trust, transparency, and exceptional service.'
                },
                { 
                  icon: <FinanceIcon sx={{ color: 'primary.main', fontSize: 40 }} />,
                  title: 'Financial Clarity',
                  description: 'We provide clear, actionable financial insights to help you make informed business decisions.'
                }
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {/* <motion.div variants={fadeInUp}> */}
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        p: 4,
                        borderRadius: 3,
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
                        }
                      }}
                    >
                      <Box sx={{ mb: 3 }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {item.description}
                      </Typography>
                    </Card>
                  {/* </motion.div> */}
                </Grid>
              ))}
            </Grid>
          {/* </motion.div> */}

          {/* Stats Section */}
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, #00897b 0%, #00695c 100%)',
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                color: 'white',
                boxShadow: '0 15px 35px rgba(0,137,123,0.2)',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background: 'radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%)',
                  zIndex: 1
                }
              }}
            >
              <Grid container spacing={4} sx={{ position: 'relative', zIndex: 2 }}>
                {[
                  { number: '1000+', label: 'Happy Clients' },
                  { number: '20+', label: 'Expert Team' },
                  { number: '15+', label: 'Years Experience' },
                  { number: '99%', label: 'Success Rate' }
                ].map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    {/* <motion.div variants={fadeInUp}> */}
                      <Box textAlign="center">
                        <Typography
                          variant="h2"
                          component="div"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: '2.2rem', md: '2.8rem' },
                            lineHeight: 1.2,
                            mb: 1,
                            background: 'linear-gradient(90deg, #ffffff, #e0f2f1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                          }}
                        >
                          {stat.number}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            opacity: 0.9,
                            fontSize: '1rem',
                            fontWeight: 500
                          }}
                        >
                          {stat.label}
                        </Typography>
                      </Box>
                    {/* </motion.div> */}
                  </Grid>
                ))}
              </Grid>
            </Box>
          {/* </motion.div> */}
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ py: { xs: 12, md: 14 }, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Box textAlign="center" mb={8}>
              {/* <motion.div variants={fadeInUp}> */}
                <Typography
                  variant="overline"
                  color="primary"
                  sx={{
                    display: 'inline-block',
                    fontWeight: 600,
                    letterSpacing: 1,
                    mb: 2,
                    color: 'primary.main',
                    fontSize: '0.9rem'
                  }}
                >
                  OUR TEAM
                </Typography>
                <Typography
                  variant="h2"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: 'text.primary',
                    fontSize: { xs: '2rem', md: '2.75rem' },
                    lineHeight: 1.2,
                    maxWidth: '800px',
                    mx: 'auto',
                    mb: 2
                  }}
                >
                  Meet Our Leadership Team
                </Typography>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  sx={{
                    maxWidth: '700px',
                    mx: 'auto',
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6
                  }}
                >
                  The talented individuals who drive our success and innovation
                </Typography>
                <Box
                  sx={{
                    width: '80px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #00897b, #4db6ac)',
                    borderRadius: '4px',
                    mx: 'auto',
                    mb: 6
                  }}
                />
              {/* </motion.div> */}
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  {/* <motion.div variants={fadeInUp}> */}
                    <Card
                      elevation={0}
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 3,
                        textAlign: 'center',
                        borderRadius: 3,
                        background: 'white',
                        border: '1px solid rgba(0,0,0,0.05)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: '0 15px 30px rgba(0,0,0,0.08)'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          mb: 3,
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '80%',
                            height: '40%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, rgba(0,150,136,0.1) 0%, rgba(0,105,92,0.1) 100%)',
                            zIndex: 1
                          }
                        }}
                      >
                        <Avatar
                          sx={{
                            width: 120,
                            height: 120,
                            fontSize: '2.5rem',
                            bgcolor: 'primary.main',
                            mb: 2,
                            position: 'relative',
                            zIndex: 2,
                            border: '4px solid white',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                          }}
                        >
                          {member.avatar}
                        </Avatar>
                      </Box>
                      <Box sx={{ flexGrow: 1, width: '100%' }}>
                        <Typography
                          variant="h6"
                          component="h3"
                          sx={{
                            fontWeight: 700,
                            mb: 1,
                            color: 'text.primary'
                          }}
                        >
                          {member.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'primary.main',
                            fontWeight: 500,
                            mb: 2,
                            minHeight: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          {member.role}
                        </Typography>
                      </Box>
                    </Card>
                  {/* </motion.div> */}
                </Grid>
              ))}
            </Grid>

            {/* <motion.div variants={fadeInUp}> */}
              <Box
                textAlign="center"
                mt={12}
                sx={{
                  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                  borderRadius: 4,
                  p: { xs: 4, md: 6 },
                  position: 'relative',
                  overflow: 'hidden',
                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: 'radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 50%)',
                    zIndex: 1
                  }
                }}
              >
                <Box position="relative" zIndex={2}>
                  <Typography
                    variant="h3"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: 'text.primary',
                      fontSize: { xs: '1.8rem', md: '2.5rem' },
                      lineHeight: 1.2,
                      maxWidth: '800px',
                      mx: 'auto',
                      mb: 3
                    }}
                  >
                    Join Our Growing Team
                  </Typography>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                      maxWidth: '700px',
                      mx: 'auto',
                      mb: 4,
                      fontWeight: 400,
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    Be part of a team that is shaping the future of business services in India
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    href="/careers"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      px: 5,
                      py: 1.5,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      borderRadius: '50px',
                      textTransform: 'none',
                      boxShadow: '0 4px 20px rgba(0,150,136,0.3)',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(0,150,136,0.4)',
                        bgcolor: 'primary.dark'
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    View Open Positions
                  </Button>
                </Box>
              </Box>
            {/* </motion.div>
          </motion.div> */}
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: { xs: 12, md: 14 }, bgcolor: 'primary.main', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
          <Box position="relative" zIndex={2}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.2,
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Ready to Simplify Your Business Compliance?
            </Typography>
            <Typography
              variant="h6"
              sx={{
                opacity: 0.9,
                mb: 5,
                maxWidth: '700px',
                mx: 'auto',
                fontWeight: 400,
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              Let our team of experts handle your legal, tax, and compliance needs so you can focus on growing your business.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get Started Today
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                href="tel:9977999663"
                startIcon={<PhoneIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textTransform: 'none',
                  borderWidth: '2px',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    borderWidth: '2px',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Call Us Now
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;