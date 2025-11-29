import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Paper, Divider } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const serviceData = {
  taxation: {
    title: 'Taxation Services',
    description: 'Comprehensive tax solutions for individuals and businesses',
    details: [
      'Income Tax Return (ITR) Filing for Individuals, Firms, and Companies',
      'GST Registration and Monthly/Quarterly GST Filing',
      'Tax Audit and Compliance',
      'TDS Return Filing and Advisory',
      'Tax Planning and Savings Consultation',
      'Advance Tax Calculation'
    ]
  },
  accounting: {
    title: 'Accounting Services',
    description: 'Professional accounting and bookkeeping services',
    details: [
      'Complete Bookkeeping Services',
      'Preparation of Financial Statements',
      'Accounts Payable/Receivable Management',
      'Payroll Processing',
      'Virtual CFO Services',
      'Monthly/Quarterly MIS Reporting'
    ]
  },
  'audit-assurance': {
    title: 'Audit & Assurance Services',
    description: 'Independent audit and compliance services',
    details: [
      'Statutory Audit for Companies',
      'Internal Audit & Process Review',
      'Stock Audit',
      'Compliance Audit',
      'Management Audit',
      'Due Diligence for Mergers/Acquisitions'
    ]
  },
  'business-registration': {
    title: 'Business Registration & Compliance',
    description: 'End-to-end business setup and compliance services',
    details: [
      'Private Limited Company Registration',
      'LLP & Partnership Firm Registration',
      'Proprietorship Registration',
      'GST Registration & Amendments',
      'ROC Compliance & Annual Filings',
      'MSME/Udyam Registration',
      'Trademark Registration Support'
    ]
  },
  advisory: {
    title: 'Advisory Services',
    description: 'Strategic financial and business advisory',
    details: [
      'Financial Advisory & Investment Guidance',
      'Business Strategy & Consulting',
      'Startup Mentorship & Compliance Planning',
      'Risk Assessment & Management',
      'Budgeting and Forecasting'
    ]
  }
};

const ServiceDetail = () => {
  const { serviceType } = useParams();
  const service = serviceData[serviceType];

  if (!service) {
    return (
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4">Service not found</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box mb={4}>
        <Typography
          component={Link}
          to="/services"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'primary.main',
            mb: 2,
            '&:hover': {
              textDecoration: 'underline'
            }
          }}
        >
          <ArrowBackIcon sx={{ mr: 1 }} /> Back to Services
        </Typography>
        <Typography variant="h2" component="h1" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          {service.description}
        </Typography>
        <Divider sx={{ my: 4 }} />
      </Box>

      <Paper elevation={3} sx={{ p: 4, mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our {service.title}
        </Typography>
        <Typography variant="body1" paragraph>
          We provide comprehensive {service.title.toLowerCase()} to help your business stay compliant and grow efficiently. Our team of experts ensures that all your {service.title.split(' ')[0].toLowerCase()} needs are met with the highest level of professionalism and accuracy.
        </Typography>
        
        <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4, mb: 2 }}>
          Services Include:
        </Typography>
        <Box component="ul" sx={{ pl: 4, '& li': { mb: 1 } }}>
          {service.details.map((item, index) => (
            <Typography component="li" variant="body1" key={index}>
              {item}
            </Typography>
          ))}
        </Box>
      </Paper>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Typography variant="h5" gutterBottom>
          Ready to get started with our {service.title}?
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          Contact us today to discuss how we can help with your {service.title.split(' ')[0].toLowerCase()} needs.
        </Typography>
      </Box>
    </Container>
  );
};

export default ServiceDetail;
