import React from "react"
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
  Breadcrumbs,
  Link,
  Paper
} from "@mui/material"

import { Container, Row, Col } from "react-bootstrap"

import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
} from "@mui/icons-material"

import { motion } from "motion/react"

import ContactForm from "../components/ContactForm"

const Contact = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const breadcrumbsItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ]
  return (
    <Box>
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
                Contact US
              </Typography>
              <Typography
                variant='h6'
                component='p'
                sx={{
                  maxWidth: "800px",
                  mx: "auto",
                  opacity: 0.9,
                  fontSize: { xs: "1.1rem", md: "1.25rem" },
                  mb: 5,
                  textAlign: "center",
                }}
              >
                Have questions or need professional guidance? <br /> We're here
                to help.
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
                  )}
                </Breadcrumbs>
              )}
            </motion.div>
          </Container>
        </Box>
      </motion.div>

      {/* Main Content */}
      <Container maxWidth='lg' sx={{ py: { xs: 6, md: 8 } }}>
        <Row>
          {/* LEFT INFO */}
          <Col md={6} sm={12}>
            <Paper elevation={0} sx={{ p: 4, height: "100%", borderRadius: 2 }}>
              <Typography
                variant='h4'
                component='h2'
                gutterBottom
                sx={{ mb: 4, fontWeight: 600, color: "primary.main" }}
              >
                Get in Touch
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: "flex", mb: 3 }}>
                  <LocationIcon color='primary' sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Office Address
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      S-75, Yashwant Plaza, Near Railway Station <br />
                      Indore, Madhya Pradesh – 452001
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <PhoneIcon color='primary' sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Phone
                    </Typography>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      component='a'
                      href='tel:+918818888744'
                      sx={{ textDecoration: "none" }}
                    >
                      +91 88188-88744
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex", mb: 3 }}>
                  <EmailIcon color='primary' sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant='body1'
                      color='text.secondary'
                      component='a'
                      href='mailto:psrco131@gmail.com'
                      sx={{ textDecoration: "none" }}
                    >
                      psrco131@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <TimeIcon color='primary' sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography
                      variant='subtitle1'
                      sx={{ fontWeight: 600, mb: 0.5 }}
                    >
                      Office Hours
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      Mon–Sat: 10:00 AM to 6:00 PM
                      <br />
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Col>

          {/* RIGHT FORM */}
          <Col md={6} sm={12}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Typography
                variant='body1'
                paragraph
                sx={{ mb: 4, textAlign: "center" }}
              >
                We would love to hear from you
              </Typography>
              <ContactForm />
            </Paper>

            {/* GOOGLE MAP */}
            <Box sx={{ mt: 6, mb: 6, textAlign: "center" }}>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3368.7790216307435!2d75.86720737530479!3d22.71860157938803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQzJzA3LjAiTiA3NcKwNTInMTEuMiJF!5e1!3m2!1sen!2sin!4v1765630035634!5m2!1sen!2sin'
                style={{ width: "100%", height: "150px", border: 0 }}
              ></iframe>
            </Box>
          </Col>
        </Row>
      </Container>
    </Box>
  )
}

export default Contact
