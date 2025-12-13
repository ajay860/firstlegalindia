import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  Box,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  FormHelperText,
  CircularProgress,
  Alert,
  AlertTitle,
  Divider,
  IconButton,
} from '@mui/material';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { bookAppointment, getAvailableSlots } from '../features/appointment/appointmentSlice';

// Styled component for hero banner
const HeroBanner = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '400px',
  backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-3a58922a22c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  color: '#fff',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    height: '300px',
    padding: theme.spacing(2),
  },
}));

const services = [
  'Tax Consultation',
  'Accounting Services',
  'Financial Planning',
  'Business Advisory',
  'Audit Services',
  'Other'
];

const BookAppointment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, success, error, availableSlots } = useSelector((state) => state.appointment);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: null,
    time: null,
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);

  // Fetch available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const formattedDate = format(selectedDate, 'yyyy-MM-dd');
      dispatch(getAvailableSlots(formattedDate));
    }
  }, [selectedDate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      date: date ? format(date, 'yyyy-MM-dd') : ''
    }));
  };

  const handleTimeChange = (time) => {
    setFormData(prev => ({
      ...prev,
      time: time ? format(time, 'HH:mm') : ''
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    dispatch(bookAppointment(formData))
      .unwrap()
      .then(() => {
        // Reset form on success
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          date: null,
          time: null,
          notes: ''
        });
        setSelectedDate(null);
        setErrors({});
      });
  };

  return (
    <Box>
      {/* Hero Banner Section */}
      <HeroBanner>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}
          >
            Book Your Appointment
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 2 }}>
              <IconButton 
                href="tel:8818888744" 
                color="inherit" 
                aria-label="Call us"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                }}
              >
                <PhoneIcon />
              </IconButton>
              <IconButton 
                href="https://wa.me/918818888744" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="WhatsApp us"
                sx={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: '800px',
              mx: 'auto',
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
              fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' }
            }}
          >
            Schedule a consultation with our experts for personalized financial solutions
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={() => {
              const formSection = document.getElementById('appointment-form');
              formSection.scrollIntoView({ behavior: 'smooth' });
            }}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: '50px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            Book Now
          </Button>
        </Container>
      </HeroBanner>

      {/* Main Content Section */}
      <Box id="appointment-form" sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              textAlign: 'center',
              color: 'primary.main',
              mb: 3
            }}
          >
            Schedule Your Consultation
          </Typography>
          
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{
              textAlign: 'center',
              maxWidth: 800,
              mx: 'auto',
              mb: 6,
              fontSize: '1.1rem'
            }}
          >
            Fill out the form below to book an appointment with our financial experts. 
            We'll get back to you shortly to confirm your preferred time slot.
          </Typography>

          <Paper 
            elevation={6} 
            sx={{ 
              p: { xs: 3, md: 4 },
              borderRadius: 2,
              maxWidth: 1200,
              mx: 'auto',
              mt: { xs: 4, md: -10 },
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
          >
            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            )}
            
            {success && (
              <Alert severity="success" sx={{ mb: 3 }}>
                <AlertTitle>Success!</AlertTitle>
                Your appointment has been scheduled. We'll contact you shortly to confirm.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    error={!!errors.phone}
                    helperText={errors.phone}
                    required
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth margin="normal" error={!!errors.service}>
                    <InputLabel id="service-label">Service Needed</InputLabel>
                    <Select
                      labelId="service-label"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      label="Service Needed"
                      required
                    >
                      <MenuItem value="">
                        <em>Select a service</em>
                      </MenuItem>
                      {services.map((service) => (
                        <MenuItem key={service} value={service}>
                          {service}
                        </MenuItem>
                      ))}
                    </Select>
                    {errors.service && (
                      <FormHelperText>{errors.service}</FormHelperText>
                    )}
                  </FormControl>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Preferred Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      minDate={new Date()}
                      maxDate={new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)} // 30 days from now
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          margin="normal"
                          error={!!errors.date}
                          helperText={errors.date || ' '}
                          required
                        />
                      )}
                    />
                  </LocalizationProvider>
                  
                  {availableSlots && availableSlots.length > 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                        Available Time Slots:
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {availableSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={formData.time === slot ? 'contained' : 'outlined'}
                            size="small"
                            onClick={() => setFormData(prev => ({
                              ...prev,
                              time: slot
                            }))}
                          >
                            {slot}
                          </Button>
                        ))}
                      </Box>
                    </Box>
                  )}
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <TimePicker
                      label="Preferred Time"
                      value={formData.time || null}
                      onChange={handleTimeChange}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          margin="normal"
                          error={!!errors.time}
                          helperText={errors.time || 'Or select from available slots'}
                          required
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Notes (Optional)"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    margin="normal"
                  />
                </Grid>
                
                <Grid item xs={12} sx={{ mt: 2, textAlign: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      py: 1.5,
                      px: 6,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      borderRadius: 2,
                      boxShadow: 2,
                      '&:hover': {
                        boxShadow: 4,
                      },
                    }}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Book Appointment'
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
            
            <Divider sx={{ my: 4 }} />
            
            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                We look forward to assisting you with your financial needs.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our team is committed to providing you with the best service and support.
              </Typography>
              
              <Button
                variant="outlined"
                color="primary"
                size="large"
                onClick={() => navigate('/contact')}
                sx={{ mt: 3 }}
              >
                Back to Contact Page
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default BookAppointment;