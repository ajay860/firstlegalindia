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
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: !isMobile,
    draggable: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    appendDots: dots => (
      <div style={{ marginTop: 10 }}>
            <ul style={{ padding: 0, margin: 0 }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={{
          width: '8px',
        height: '8px',
        borderRadius: '50%',
        backgroundColor: 'rgba(0,0,0,0.3)',
        margin: '0 5px',
        cursor: 'pointer',
        }}
      />
    ),
  };

  return (
    <Box sx={{ width: '100%', position: 'relative', px: 15}}> {/* Remove unnecessary padding */}
      <Slider {...settings}>
        {services.map((service, index) => (
          <Box key={index} sx={{ display: 'flex', justifyContent: 'center', p: 1 }}> {/* Remove padding here */}
            <Box sx={{ maxWidth: '100%', width: '100%' }}> {/* Ensure the width is not restricted */}
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
