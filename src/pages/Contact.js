import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  TextField, 
  Button, 
  Paper,
  Divider,
  InputAdornment,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  AccessTime as TimeIcon,
  Send as SendIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 6, md: 8 },
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
              mb: 2,
              fontSize: { xs: '2.2rem', md: '3rem' },
              lineHeight: 1.2
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}
          >
            Have questions or need professional guidance? We're here to help.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 2 }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 4, fontWeight: 600, color: 'primary.main' }}>
                Get in Touch
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', mb: 3 }}>
                  <LocationIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Office Address</Typography>
                    <Typography variant="body1" color="text.secondary">
                      s-75 yashwant plaza near railway station
                      <br />
                      Indore, Madhya Pradesh 45200
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', mb: 3 }}>
                  <PhoneIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Phone</Typography>
                    <Typography variant="body1" color="text.secondary">
                      +91 9977999663
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', mb: 3 }}>
                  <EmailIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Email</Typography>
                    <Typography variant="body1" color="text.secondary">
                      psrco131@gmail.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex' }}>
                  <TimeIcon color="primary" sx={{ mr: 2, mt: 0.5 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>Office Hours</Typography>
                    <Typography variant="body1" color="text.secondary">
                      Mon–Sat: 10:00 AM to 6:00 PM
                      <br />
                      Sunday: Closed
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 4 }} />
              
              <Box>
                <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                  Send us a message
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Our team will get back to you within 24 hours.
                </Typography>
                
                <form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Your Name"
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        multiline
                        rows={4}
                        variant="outlined"
                        margin="normal"
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<SendIcon />}
                        sx={{ mt: 2 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Paper>
          </Grid>

          {/* Appointment Section */}
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, height: '100%' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <CalendarIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                <Box>
                  <Typography variant="h4" component="h2" sx={{ fontWeight: 600, color: 'primary.main' }}>
                    Book an Appointment
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Schedule a consultation with our experts
                  </Typography>
                </Box>
              </Box>
              
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Schedule a consultation with our experts for tax, accounting, or business advisory services. 
                Select a preferred date and time, and we will confirm your appointment shortly.
              </Typography>

              <form>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      type="tel"
                      variant="outlined"
                      margin="normal"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Service Required"
                      select
                      variant="outlined"
                      margin="normal"
                      SelectProps={{ native: true }}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="taxation">Taxation Services</option>
                      <option value="accounting">Accounting Services</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="business">Business Registration</option>
                      <option value="advisory">Advisory Services</option>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Preferred Date"
                      type="date"
                      variant="outlined"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Preferred Time"
                      type="time"
                      variant="outlined"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Additional Notes"
                      multiline
                      rows={3}
                      variant="outlined"
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ mt: 2, py: 1.5 }}
                    >
                      Book Appointment
                    </Button>
                  </Grid>
                </Grid>
              </form>

              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  We look forward to assisting you with your financial needs.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our team is committed to providing you with the best service and support.
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
