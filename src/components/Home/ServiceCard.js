import React from 'react';
import { Card, CardContent, Typography, Box, Link } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ServiceCard = ({ title, description, bgImage, link }) => {
  return (
    <motion.div // Use div for animation to avoid nesting <a> tags
      style={{ textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}
      whileHover={{ y: -5 }} // Move up 5px on hover
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Use a standard <a> tag for navigation */}
      <a href={link} style={{ textDecoration: 'none' }}>
        <Card
          sx={{
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            mb: 4,
            cursor: 'pointer',
          }}
        >
          {/* Header with background image and overlay */}
          <Box
            sx={{
              position: 'relative', // For overlay
              height: 90,
              background: `url(${bgImage}) center/cover no-repeat`,
              px: 4,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {/* Overlay simulating ::before */}
            <Box
              sx={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bgcolor: '#00747C',
                opacity: 0.5,
                zIndex: 0,
              }}
            />

            {/* Title on top of overlay */}
            <Typography
              variant="h6"
              color="white"
              fontWeight="600"
              sx={{ position: 'relative', zIndex: 1 }}
            >
              {title}
            </Typography>
          </Box>

          {/* Content */}
          <CardContent>
            <Typography variant="body2" fontSize={'1.1rem'} color="text.primary" p={2}>
              {description}
            </Typography>
            <Link
              href="#"
              underline="none"
              sx={{
                display: 'inline-block',
                alignItems: 'center',
                gap: 0.6,
                fontWeight: 600,
                cursor: 'pointer',
                color: 'primary.main',
                transition: '0.2s',
                ml: 'auto', // Pushes it to the right
                mt: 1,
              }}
            >
              Request A Callback
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
