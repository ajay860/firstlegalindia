import React from "react"
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material"

import { Row, Col } from "react-bootstrap"
import PublicIcon from "@mui/icons-material/Public"
import SupportAgentIcon from "@mui/icons-material/SupportAgent"

import ContactForm from "../components/ContactForm"

const stats = [
  { label: "Clients", value: "2,345" },
  { label: "Staff Members", value: "345" },
  { label: "Services Offered", value: "120+" },
  { label: "Countries Served", value: "14+" },
]

const ServicePage = () => {
  return (
    <Box sx={{ bgcolor: "#f4f6f8" }}>
      <Box
        component='section'
        sx={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          bgcolor: "#F5F5F5",
          px: 2,
        }}
      >
        <Container maxWidth='md'>
          <Typography variant='h2' fontWeight={700} gutterBottom>
            Reliable Accounting Services
          </Typography>

          <Typography variant='h6' color='text.secondary' mb={4}>
            We provide tailored accounting services to help your business grow.
            Let us handle the numbers so you can focus on what matters.
          </Typography>

          <Button
            variant='contained'
            size='large'
            sx={{ px: 5, py: 1.5, borderRadius: 5 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* QUOTE + FORM */}
      <Box component='section' py={8}>
        <Container maxWidth='lg'>
          <Row container spacing={6}>
            <Col item xs={12} md={7}>
              <Typography variant='h4' fontWeight={600} gutterBottom>
                Get a Free Quote Calculation
              </Typography>

              <Typography variant='body1' color='text.secondary' mb={4}>
                For a quick calculation of your expenses, send us your info. Our
                accounting experts will build the best possible offer.
              </Typography>

              <Row container spacing={4}>
                <Col item xs={12} md={6}>
                  <PublicIcon color='primary' sx={{ fontSize: 48 }} />
                  <Typography variant='h6' fontWeight={600} mt={2}>
                    International Accounting
                  </Typography>
                  <Typography color='text.secondary'>
                    Operating in over 14 countries with 200+ employees
                    worldwide.
                  </Typography>
                </Col>

                <Col item xs={12} md={6}>
                  <SupportAgentIcon color='primary' sx={{ fontSize: 48 }} />
                  <Typography variant='h6' fontWeight={600} mt={2}>
                    24/7 Availability
                  </Typography>
                  <Typography color='text.secondary'>
                    Always available with fast response and delivery times.
                  </Typography>
                </Col>
              </Row>
            </Col>

            <Col item xs={12} md={5}>
                <Box className="p-5 border bg-white">
                    <ContactForm />
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>

      {/* STATS */}
      <Box
        component='section'
        py={10}
        sx={{
          color: "white",
          backgroundImage: "url('/servicepage.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          textAlign: "center",
        }}
      >
        <Container maxWidth='lg'>
          <Typography variant='h3' fontWeight={700} mb={2}>
            Our Experience & Expertise
          </Typography>

          <Typography mb={6}>
            We bring the best possible solutions for your business growth.
          </Typography>

          <Grid container spacing={4} justifyContent='center'>
            {stats.map((item) => (
              <Grid item xs={6} md={3} key={item.label}>
                <Typography variant='h4' fontWeight={700}>
                  {item.value}
                </Typography>
                <Typography>{item.label}</Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ABOUT */}
      <Box component='section' py={8} bgcolor='white'>
        <Container maxWidth='lg'>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Typography variant='h3' fontWeight={700} gutterBottom>
                About Us
              </Typography>

              <Typography variant='h6' color='text.secondary' mb={3}>
                A professional accounting team with global experience.
              </Typography>

              <Typography color='text.secondary' mb={2}>
                We specialize in business management consulting, helping
                organizations grow sustainably.
              </Typography>

              <Typography color='text.secondary'>
                We’ve worked with Global 500 companies, nonprofits, and private
                equity funds representing 75% of global equity capital.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* NEWS */}
      <Box component='section' py={8}>
        <Container maxWidth='lg'>
          <Typography variant='h4' align='center' gutterBottom>
            Latest Articles
          </Typography>

          <Typography align='center' color='text.secondary' mb={6}>
            Strategic insights and practical actions for real results.
          </Typography>

          <Row container spacing={4}>
            {["EU VAT Changes", "Financial Reports", "Accounting Basics"].map(
              (title, i) => (
                <Col item xs={12} md={4} key={i}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant='h6' fontWeight={600}>
                      {title}
                    </Typography>
                    <Typography color='text.secondary' my={2}>
                      December 12, 2014
                    </Typography>
                    <Typography color='text.secondary' mb={2}>
                      Learn how these updates affect your business accounting.
                    </Typography>
                    <Button size='small'>Read More</Button>
                  </Paper>
                </Col>
              )
            )}
          </Row>
        </Container>
      </Box>

      {/* FINAL CTA */}
      <Box component='section' py={8} textAlign='center' bgcolor='grey.100'>
        <Container maxWidth='md'>
          <Typography variant='h4' fontWeight={600} gutterBottom>
            Get Free Consultation From Our Experts
          </Typography>

          <Divider sx={{ width: 80, mx: "auto", my: 3 }} />

          <Typography color='text.secondary' mb={4}>
            10+ years of experience helping businesses find comprehensive
            solutions.
          </Typography>

          <Button variant='contained' size='large'>
            Request Callback
          </Button>
        </Container>
      </Box>
    </Box>
  )
}

export default ServicePage
