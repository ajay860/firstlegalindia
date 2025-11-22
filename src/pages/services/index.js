import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from '@mui/material';
import {
  Receipt as TaxIcon,
  AccountBalance as AccountingIcon,
  GppGood as AuditIcon,
  Business as BusinessIcon,
  EmojiObjects as AdvisoryIcon,
  CheckCircle as CheckIcon
} from '@mui/icons-material';

const services = [
  {
    title: 'Taxation Services',
    slug: 'taxation',
    icon: <TaxIcon fontSize="large" color="primary" />,
    items: [
      'Income Tax Return (ITR) Filing for Individuals, Firms, and Companies',
      'GST Registration and Monthly/Quarterly GST Filing',
      'Tax Audit and Compliance',
      'TDS Return Filing and Advisory',
      'Tax Planning and Savings Consultation',
      'Advance Tax Calculation'
    ]
  },
  {
    title: 'Accounting Services',
    slug: 'accounting',
    icon: <AccountingIcon fontSize="large" color="primary" />,
    items: [
      'Complete Bookkeeping Services',
      'Preparation of Financial Statements',
      'Accounts Payable/Receivable Management',
      'Payroll Processing',
      'Virtual CFO Services',
      'Monthly/Quarterly MIS Reporting'
    ]
  },
  {
    title: 'Audit & Assurance Services',
    slug: 'audit-assurance',
    icon: <AuditIcon fontSize="large" color="primary" />,
    items: [
      'Statutory Audit for Companies',
      'Internal Audit & Process Review',
      'Stock Audit',
      'Compliance Audit',
      'Management Audit',
      'Due Diligence for Mergers/Acquisitions'
    ]
  },
  {
    title: 'Business Registration & Compliance',
    slug: 'business-registration',
    icon: <BusinessIcon fontSize="large" color="primary" />,
    items: [
      'Private Limited Company Registration',
      'LLP & Partnership Firm Registration',
      'Proprietorship Registration',
      'GST Registration & Amendments',
      'ROC Compliance & Annual Filings',
      'MSME/Udyam Registration',
      'Trademark Registration Support'
    ]
  },
  {
    title: 'Advisory Services',
    slug: 'advisory',
    icon: <AdvisoryIcon fontSize="large" color="primary" />,
    items: [
      'Financial Advisory & Investment Guidance',
      'Business Strategy & Consulting',
      'Startup Mentorship & Compliance Planning',
      'Risk Assessment & Management',
      'Budgeting and Forecasting'
    ]
  }
];

const Services = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 10 },
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
            Our Services
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
            We offer a wide range of financial, compliance, and advisory services designed to help individuals and businesses stay compliant and grow efficiently.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index} sx={{ mb: 6 }}>
              <Box
                component={Link}
                to={`/services/${service.slug}`}
                sx={{
                  textDecoration: 'none',
                  display: 'block',
                  height: '100%',
                  '&:hover': {
                    '& .service-card': {
                      transform: 'translateY(-5px)',
                      boxShadow: 6
                    }
                  }
                }}
              >
                <Paper
                  className="service-card"
                  elevation={3}
                  sx={{
                    borderRadius: 2,
                    overflow: 'hidden',
                    height: '100%',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <Box 
                    sx={{ 
                      bgcolor: 'primary.main',
                      color: 'white',
                      p: 3,
                      display: 'flex',
                      alignItems: 'center'
                    }}
                  >
                    <Box sx={{ mr: 3 }}>{service.icon}</Box>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Box sx={{ p: 4 }}>
                    <List disablePadding>
                      {service.items.slice(0, 4).map((item, idx) => (
                        <ListItem key={idx} disableGutters sx={{ py: 1 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckIcon color="primary" />
                          </ListItemIcon>
                          <ListItemText
                            primary={item}
                            primaryTypographyProps={{ variant: 'body1' }}
                            sx={{ '& .MuiListItemText-primary': { fontSize: '0.9rem' } }}
                          />
                        </ListItem>
                      ))}
                      {service.items.length > 4 && (
                        <Typography variant="body2" color="primary" sx={{ mt: 2, textAlign: 'center', fontWeight: 500 }}>
                          + {service.items.length - 4} more services
                        </Typography>
                      )}
                    </List>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          bgcolor: 'grey.50',
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
            Ready to Get Started?
          </Typography>
          <Typography variant="h6" sx={{ mb: 5, opacity: 0.9 }}>
            Contact us today to discuss how we can help with your financial needs.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;