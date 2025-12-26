import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link,
  CardActions,
  CardActionArea,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CARD_HEIGHT = 260; // 👈 control height here

const ServiceCard = ({ title, description, bgImage, link }) => {
  return (
    <motion.div
      style={{ display: 'block', height: '100%' }}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <a href={link} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
        <Card
          sx={{
            height: CARD_HEIGHT,          // 🔒 fixed height
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          }}
        >
          <CardActionArea>
            {/* IMAGE HEADER */}
            <Box
              sx={{
                position: 'relative',
                height: 90,
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                px: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {/* Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: '#00747C',
                  opacity: 0.5,
                }}
              />

              <Typography
                variant="h6"
                color="white"
                fontWeight={600}
                sx={{ position: 'relative' }}
              >
                {title}
              </Typography>
            </Box>

            {/* CONTENT */}
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="body2"
                fontSize="1.1rem"
                color="text.primary"
                sx={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,        // 👈 max lines
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>

          {/* FOOTER (ALWAYS BOTTOM) */}
          <CardActions
            sx={{
              mt: 'auto',
              px: 3,
              pb: 2,
            }}
          >
            <Link
              href="link"
              underline="none"
              sx={{
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'primary.main',
              }}
            >
              Request A Callback
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Link>
          </CardActions>
        </Card>
      </a>
    </motion.div>
  );
};

export default ServiceCard;
