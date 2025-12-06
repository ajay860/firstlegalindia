import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import ServiceCard from './ServiceCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ServicesSlider = ({ services }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // only render slider after client mounts
  }, []);

  if (!mounted) return null; // prevent SSR / hydration issues

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: !isMobile,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
        <ul style={{ padding: 0, margin: 0, display: 'flex' }}> 
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
  <div
    style={{
      width: '14px', // Slightly bigger for better visibility
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#d3d3d3', // Light gray for inactive state
      margin: '0 5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add light shadow for depth
    }}
    onMouseEnter={e => {
      e.target.style.transform = 'scale(1.3)';
      e.target.style.backgroundColor = '#ff4081'; // Vibrant color on hover
      e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Slightly more pronounced shadow on hover
    }}
    onMouseLeave={e => {
      e.target.style.transform = 'scale(1)';
      e.target.style.backgroundColor = '#d3d3d3'; // Revert to light gray
      e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'; // Revert shadow
    }}
  />
),
    nextArrow: (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        &#10095;
      </div>
    ),
    prevArrow: (
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 10,
        }}
      >
        &#10094;
      </div>
    ),
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', ml: -1, mr: -1 }}> {/* Removed unnecessary padding */}
      <Slider {...settings}>
        {services.map((service, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center', p: 1 }}>
            <Box sx={{ maxWidth: '100%', width: '100%' }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                bgImage={service.bgImage}
                link={service.link}
              />
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ServicesSlider;
