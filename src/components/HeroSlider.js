// src/components/HeroSlider.js
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const SlideContent = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        height: { xs: '60vh', md: '80vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        textAlign: 'left',
        position: 'relative',
        overflow: 'hidden',
        px: 2,
        '& h1, & h5, & button': {
          opacity: 0,
          transform: 'translateY(20px)',
          animation: 'fadeInUp 0.8s ease forwards',
        },
        '& h5': {
          animationDelay: '0.2s'
        },
        '& button': {
          animationDelay: '0.4s'
        },
        '@keyframes fadeInUp': {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)'
          }
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{
            maxWidth: '700px',
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: '2.2rem', sm: '2.2rem', md: '2.5rem' },
            lineHeight: 1.1,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            maxWidth: '800px',
            // mx: 'auto',
            mb: 6,
            opacity: 0.9,
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.5rem' },
            fontWeight: 300,
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
          }}
        >
          {subtitle}
        </Typography>

        <Button
          component={Link}
          to={buttonLink}
          variant="contained"
          color="primary"
          size="large"
          sx={{
            px: 5,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '50px',
            textTransform: 'none',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
            },
          }}
        >
          {buttonText}
        </Button>
      </Container>
    </Box>
  );
};

const HeroSlider = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    fade: true,
    arrows: !isMobile && isClient,
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '20px' }}>
        <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255,255,255,0.5)',
          margin: '0 5px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
        }}
      />
    ),
  };

  // Hero slides data
  // linear-gradient(135deg, rgba(0,105,92,0.9) 0%, rgba(0,137,123,0.9) 100%), 
  const heroSlides = [
    {
      title: "End-to-End Business & Compliance Consulting ",
      subtitle: "First India Legal provides comprehensive business registration and compliance solutions, online and offline, ensuring regulatory adherence and peace of mind. ",
      buttonText: "Contact Us",
      buttonLink: "/services",
      bgImage: "url('/slider.png')",
      overlay: "rgba(0,0,0,0)",
    },
    {
      title: "Strategic Business Advisory",
      subtitle: "Expert guidance to navigate financial challenges and capitalize on growth opportunities.",
      buttonText: "Learn More",
      buttonLink: "/about",
      bgImage: "url('/slider.png')",
      overlay: "rgba(0,0,0,0)",
    }
  ];

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {heroSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(to right, ${slide.overlay}, ${slide.overlay}), ${slide.bgImage}`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center bottom',
                opacity: 1,
                zIndex: 1,
              }
            }}
          >
            <SlideContent {...slide} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;