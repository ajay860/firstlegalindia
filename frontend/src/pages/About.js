// src/pages/About.js
import React, { useEffect } from "react"
import SpinBox from "../components/SpinBox"
import CircularPartition from "../components/CircularDot"

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
  Breadcrumbs,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
} from "@mui/material"
import {
  ArrowForward as ArrowForwardIcon,
  Phone as PhoneIcon,
  GppGood as GppGoodIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Handshake as HandshakeIcon,
  AccountBalance as FinanceIcon,
  Check as CheckIcon,
} from "@mui/icons-material"

import { motion } from "motion/react"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "JD",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    avatar: "JS",
  },
  {
    name: "Mike Johnson",
    role: "Lead Developer",
    avatar: "MJ",
  },
  {
    name: "Sarah Williams",
    role: "Design Lead",
    avatar: "SW",
  },
]

const breadcrumbsItems = [{ label: "Home", href: "/" }, { label: "About US" }]
const About = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  useEffect(() => {
    // Smooth scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: "#16252b",
            color: "white",
            py: { xs: 9, md: 11 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container
            maxWidth='lg'
            sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Typography
                variant='h1'
                component='h1'
                sx={{
                  fontWeight: 800,
                  mb: 1,
                  fontSize: { xs: "2.4rem", md: "2.8rem" },
                  lineHeight: 1.1,
                  textShadow: "0 2px 10px rgba(0,0,0,0.1)",
                  textAlign: "center",
                }}
              >
                About
              </Typography>
              {breadcrumbsItems.length > 0 && (
                <Breadcrumbs
                  sx={{
                    justifyContent: "center",
                    display: "flex",
                    color: "rgba(255,255,255,0.8)",
                    "& a": {
                      color: "white",
                      textDecoration: "none",
                      "&:hover": { textDecoration: "underline" },
                    },
                  }}
                >
                  {breadcrumbsItems.map((crumb, index) =>
                    crumb.href ? (
                      <Link key={index} href={crumb.href}>
                        {crumb.label}{" "}
                      </Link>
                    ) : (
                      <Typography key={index} color='white' fontWeight='600'>
                        {crumb.label}{" "}
                      </Typography>
                    )
                  )}{" "}
                </Breadcrumbs>
              )}
            </motion.div>
          </Container>
        </Box>
      </motion.div>
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth='lg'>
          <Box className="row gap-6">
            <Box className="col-xs-12 col-sm-4">
              <motion.div variants={fadeInUp}>
                <Box>
                  <img src="./about.png" alt="" className="img-fluid" />
                </Box>
              </motion.div>
            </Box>
            <Box className="col-xs-12 col-sm-8">
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography
                    component='p'
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant='bodySecondary'
                  >
                    About US
                  </Typography>
                  <Typography
                    variant='h4'
                    component='h4'
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 4,
                      fontWidth: "600",
                    }}
                  >
                    Fast And Affordable Financial Accounting Services
                  </Typography>
                  <Typography
                    variant='p'
                    component='p'
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 4,
                      fontSize: " ",
                    }}
                  >
                    We provide reliable and cost-effective financial, accounting, and compliance solutions for individuals, startups, and growing businesses. Our goal is to simplify complex financial processes and ensure timely, accurate service delivery. With a team of experienced professionals, we help businesses stay compliant, manage finances efficiently, and focus on sustainable growth.
                  </Typography>
                  <Box>
                    <Box className="row gap-6">
                      <Grid className="col-xs-12 col-sm-6">
                        <nav aria-label='secondary mailbox folders'>
                          <List>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary='Taxation of Expatriates' />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary='Accounts Outsourcing' />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary='Auditing & Assurance' />
                              </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                              <ListItemButton>
                                <ListItemIcon>
                                  <CheckIcon />
                                </ListItemIcon>
                                <ListItemText primary='Goods & Service Tax' />
                              </ListItemButton>
                            </ListItem>
                          </List>
                        </nav>
                      </Grid>
                      <Grid className="col-xs-12 col-sm-6">
                        <SpinBox
                          text='Management Accounting'
                          textOrder='2'
                          icon={CheckIcon}
                        />
                        <Box className='text-center'>
                          <motion.div
                            initial={{ opacity: 0.5 }}
                            animate={{ opacity: 0.50 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              repeatType: "reverse",
                            }}
                          >
                            <CircularPartition size={50} />
                          </motion.div>{" "}
                        </Box>
                        <SpinBox
                          text='Income Tax Advisory'
                          textOrder='1'
                          icon={PeopleIcon}
                        />
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#f3f5fa" }}>
        <Container maxWidth='lg'>
          <Grid className="row gap-6">
            <Grid className="col-xs-12 col-sm-6">
              <motion.div variants={fadeInUp}>
                 <Box><Typography
                      component='p'
                      gutterBottom
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                      }}
                      variant='bodySecondary'
                    >
                      The Mission
                    </Typography>
                      <Typography
                      variant='p'
                      component='p'
                      gutterBottom
                      sx={{
                        fontWeight: 500,
                        mb: 4,
                        fontSize: " ",
                      }}
                    >
                      Our mission is to simplify compliance and financial management for individuals, startups, and growing businesses.
We strive to deliver accurate, reliable, and timely services across all our offerings.
Our expertise includes accounting, GST, taxation, and company registration.
We also support brand registration, food licensing, and CMA report preparation.
By ensuring seamless compliance, we help businesses operate with confidence.
This allows our clients to focus on what truly matters—their growth and success.
                    </Typography>
                  </Box>  
              </motion.div>
            </Grid>
            <Grid className="col-xs-12 col-sm-6">
              <motion.div variants={fadeInUp}>
                <Box>
                  <Typography
                    component='p'
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                    }}
                    variant='bodySecondary'
                  >
                    The Story
                  </Typography>
                  <Typography
                    variant='p'
                    component='p'
                    gutterBottom
                    sx={{
                      fontWeight: 500,
                      mb: 4,
                      fontSize: " ",
                    }}
                  >
          Our journey began with a simple goal—to simplify financial and legal processes for businesses of all sizes.
We saw how complex paperwork and compliance challenges slowed down entrepreneurs.
To solve this, we built a team of experts in accounting, taxation, and business consulting.
Over time, we’ve helped clients with registrations, licenses, GST and tax filings, and CMA reports.
Today, we are a trusted partner supporting businesses from compliance to expansion.
Our mission is to empower businesses to grow with confidence and clarity.
                  </Typography>
                </Box>
              </motion.div>   
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
        <Container maxWidth='lg'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <Grid  className="row gap-6">
              <Grid  className="col-xs-12 col-sm-6">
                <motion.div variants={fadeInUp}>
                  <Typography
                    variant='h5'
                    component='h5'
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      mb: 4,
                    }}
                  >
                    The Vision
                  </Typography>
                  <Typography
                    variant='body1'
                    paragraph
                    sx={{
                      mb: 3,
                      fontSize: "1.1rem",
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                  >
                   We aim to simplify legal, tax, and compliance services for growing businesses.
Our focus is on making these services easy to understand, accessible, and affordable.
                  </Typography>
                  
                </motion.div>

                <motion.div variants={fadeInUp}>
                  <Box
                    sx={{
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    <Typography
                      variant='body1'
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      By removing complexity, we help entrepreneurs stay compliant with confidence.
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
                      
Our vision is to empower every business and individual across India to grow seamlessly.
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
              <Grid  className="col-xs-12 col-sm-6">
                <motion.div variants={fadeInUp}>
                   <Grid container spacing={6} alignItems='center'>
              <Grid size={6}>
                <Box
                  component='img'
                  src='https://preview.vwthemesdemo.com/chartered-accountant-pro/wp-content/themes/chartered-accountant-pro/assets/images/about-page/vision1.png'
                  alt='Our Office'
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                /></Grid>
              <Grid size={6}>
                <Box
                  component='img'
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
                  alt='Our Office'
                  sx={{
                    width: "100%",
                    borderRadius: 4,
                    boxShadow: 3,
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: 6,
                    },
                  }}
                /></Grid>
                </Grid>
                </motion.div>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Box> 
      <Box sx={{ display: "none" }}>
        {/* What Makes Us Different */}
        <Box sx={{ py: { xs: 12, md: 14 }, bgcolor: "background.default" }}>
          <Container maxWidth='lg'>
            {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Box textAlign='center' mb={8}>
              {/* <motion.div variants={fadeInUp}> */}
              <Typography
                variant='overline'
                color='primary'
                sx={{
                  display: "inline-block",
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 2,
                  color: "primary.main",
                  fontSize: "0.9rem",
                }}
              >
                WHY CHOOSE US
              </Typography>
              <Typography
                variant='h2'
                component='h2'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  lineHeight: 1.2,
                  maxWidth: "800px",
                  mx: "auto",
                  mb: 3,
                }}
              >
                What makes us the right choice for you
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #00897b, #4db6ac)",
                  borderRadius: "4px",
                  mx: "auto",
                  mb: 4,
                }}
              />
              {/* </motion.div> */}
            </Box>

            <Grid container spacing={4} sx={{ mb: 8 }}>
              {[
                {
                  icon: (
                    <GppGoodIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  ),
                  title: "Expertise & Experience",
                  description:
                    "Our team of professionals brings years of experience in legal, tax, and compliance services, ensuring you get the best advice and support.",
                },
                {
                  icon: (
                    <PeopleIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  ),
                  title: "Client-Centric Approach",
                  description:
                    "We prioritize your needs and work closely with you to understand your business goals and challenges.",
                },
                {
                  icon: (
                    <TrendingUpIcon
                      sx={{ color: "primary.main", fontSize: 40 }}
                    />
                  ),
                  title: "Growth Focused",
                  title: "Growth Focused",
                  description:
                    "Our solutions are designed to help your business scale while maintaining compliance every step of the way.",
                },
                {
                  icon: (
                    <HandshakeIcon
                      sx={{ color: "primary.main", fontSize: 40 }}
                    />
                  ),
                  title: "Trusted Partnership",
                  description:
                    "We build long-term relationships based on trust, transparency, and exceptional service.",
                },
                {
                  icon: (
                    <FinanceIcon sx={{ color: "primary.main", fontSize: 40 }} />
                  ),
                  title: "Financial Clarity",
                  description:
                    "We provide clear, actionable financial insights to help you make informed business decisions.",
                },
              ].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  {/* <motion.div variants={fadeInUp}> */}
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      p: 4,
                      borderRadius: 3,
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <Box sx={{ mb: 3 }}>{item.icon}</Box>
                    <Typography
                      variant='h5'
                      component='h3'
                      gutterBottom
                      sx={{ fontWeight: 700, mb: 2 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant='body1'
                      sx={{ color: "text.secondary", lineHeight: 1.7 }}
                    >
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
                background: "linear-gradient(135deg, #00897b 0%, #00695c 100%)",
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                color: "white",
                boxShadow: "0 15px 35px rgba(0,137,123,0.2)",
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%)",
                  zIndex: 1,
                },
              }}
            >
              <Grid
                container
                spacing={4}
                sx={{ position: "relative", zIndex: 2 }}
              >
                {[
                  { number: "1000+", label: "Happy Clients" },
                  { number: "20+", label: "Expert Team" },
                  { number: "15+", label: "Years Experience" },
                  { number: "99%", label: "Success Rate" },
                ].map((stat, index) => (
                  <Grid item xs={6} sm={3} key={index}>
                    {/* <motion.div variants={fadeInUp}> */}
                    <Box textAlign='center'>
                      <Typography
                        variant='h2'
                        component='div'
                        sx={{
                          fontWeight: 800,
                          fontSize: { xs: "2.2rem", md: "2.8rem" },
                          lineHeight: 1.2,
                          mb: 1,
                          background:
                            "linear-gradient(90deg, #ffffff, #e0f2f1)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          display: "inline-block",
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant='subtitle1'
                        sx={{
                          opacity: 0.9,
                          fontSize: "1rem",
                          fontWeight: 500,
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
        <Box sx={{ py: { xs: 12, md: 14 }, bgcolor: "background.paper" }}>
          <Container maxWidth='lg'>
            {/* <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          > */}
            <Box textAlign='center' mb={8}>
              {/* <motion.div variants={fadeInUp}> */}
              <Typography
                variant='overline'
                color='primary'
                sx={{
                  display: "inline-block",
                  fontWeight: 600,
                  letterSpacing: 1,
                  mb: 2,
                  color: "primary.main",
                  fontSize: "0.9rem",
                }}
              >
                OUR TEAM
              </Typography>
              <Typography
                variant='h2'
                component='h2'
                gutterBottom
                sx={{
                  fontWeight: 700,
                  color: "text.primary",
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  lineHeight: 1.2,
                  maxWidth: "800px",
                  mx: "auto",
                  mb: 2,
                }}
              >
                Meet Our Leadership Team
              </Typography>
              <Typography
                variant='h6'
                color='text.secondary'
                sx={{
                  maxWidth: "700px",
                  mx: "auto",
                  mb: 4,
                  fontWeight: 400,
                  lineHeight: 1.6,
                }}
              >
                The talented individuals who drive our success and innovation
              </Typography>
              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  background: "linear-gradient(90deg, #00897b, #4db6ac)",
                  borderRadius: "4px",
                  mx: "auto",
                  mb: 6,
                }}
              />
              {/* </motion.div> */}
            </Box>

            <Grid container spacing={4} justifyContent='center'>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  {/* <motion.div variants={fadeInUp}> */}
                  <Card
                    elevation={0}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 3,
                      textAlign: "center",
                      borderRadius: 3,
                      background: "white",
                      border: "1px solid rgba(0,0,0,0.05)",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 15px 30px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        mb: 3,
                        "&:before": {
                          content: '""',
                          position: "absolute",
                          bottom: 0,
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "80%",
                          height: "40%",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, rgba(0,150,136,0.1) 0%, rgba(0,105,92,0.1) 100%)",
                          zIndex: 1,
                        },
                      }}
                    >
                      <Avatar
                        sx={{
                          width: 120,
                          height: 120,
                          fontSize: "2.5rem",
                          bgcolor: "primary.main",
                          mb: 2,
                          position: "relative",
                          zIndex: 2,
                          border: "4px solid white",
                          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                        }}
                      >
                        {member.avatar}
                      </Avatar>
                    </Box>
                    <Box sx={{ flexGrow: 1, width: "100%" }}>
                      <Typography
                        variant='h6'
                        component='h3'
                        sx={{
                          fontWeight: 700,
                          mb: 1,
                          color: "text.primary",
                        }}
                      >
                        {member.name}
                      </Typography>
                      <Typography
                        variant='body2'
                        sx={{
                          color: "primary.main",
                          fontWeight: 500,
                          mb: 2,
                          minHeight: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
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
              textAlign='center'
              mt={12}
              sx={{
                background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
                borderRadius: 4,
                p: { xs: 4, md: 6 },
                position: "relative",
                overflow: "hidden",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  background:
                    "radial-gradient(circle at top right, rgba(255,255,255,0.8) 0%, transparent 50%)",
                  zIndex: 1,
                },
              }}
            >
              <Box position='relative' zIndex={2}>
                <Typography
                  variant='h3'
                  component='h3'
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: { xs: "1.8rem", md: "2.5rem" },
                    lineHeight: 1.2,
                    maxWidth: "800px",
                    mx: "auto",
                    mb: 3,
                  }}
                >
                  Join Our Growing Team
                </Typography>
                <Typography
                  variant='h6'
                  color='text.secondary'
                  sx={{
                    maxWidth: "700px",
                    mx: "auto",
                    mb: 4,
                    fontWeight: 400,
                    lineHeight: 1.6,
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Be part of a team that is shaping the future of business
                  services in India
                </Typography>
                <Button
                  variant='contained'
                  color='primary'
                  size='large'
                  href='/careers'
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "0 4px 20px rgba(0,150,136,0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,150,136,0.4)",
                      bgcolor: "primary.dark",
                    },
                    transition: "all 0.3s ease",
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
        <Box
          sx={{
            py: { xs: 12, md: 14 },
            bgcolor: "primary.main",
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Container maxWidth='lg'>
            <Box position='relative' zIndex={2}>
              <Typography
                variant='h3'
                component='h2'
                sx={{
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  lineHeight: 1.2,
                  maxWidth: "800px",
                  mx: "auto",
                }}
              >
                Ready to Simplify Your Business Compliance?
              </Typography>
              <Typography
                variant='h6'
                sx={{
                  opacity: 0.9,
                  mb: 5,
                  maxWidth: "700px",
                  mx: "auto",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                }}
              >
                Let our team of experts handle your legal, tax, and compliance
                needs so you can focus on growing your business.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 3,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant='contained'
                  color='secondary'
                  size='large'
                  href='/contact'
                  sx={{
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started Today
                </Button>
                <Button
                  variant='outlined'
                  color='inherit'
                  size='large'
                  href='tel:8818888744'
                  startIcon={<PhoneIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    textTransform: "none",
                    borderWidth: "2px",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderWidth: "2px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Call Us Now
                </Button>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </Box>
  )
}

export default About
