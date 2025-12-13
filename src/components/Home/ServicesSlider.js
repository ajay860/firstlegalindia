import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, useTheme, useMediaQuery, Button } from "@mui/material";
import ServiceCard from "./ServiceCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSlider = ({ services }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mounted, setMounted] = useState(false);
  const sliderRef = React.useRef(null); // ref to control slider

  useEffect(() => {
    setMounted(true); // only render slider after client mounts
  }, []);

  if (!mounted) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: isMobile ? 1 : 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, // hide default arrows
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        ml: { xs: 0, sm: -1 },
        mr: { xs: 0, sm: -1 },
        pb: 8, // space for buttons
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {services.map((service, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "center",
              px:  1,
              py: 0.5
            }}  
          >
            <Box sx={{ maxWidth: "100%", width: "100%" }}>
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

      {/* Custom buttons below slider */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2, // space between buttons
          position: "absolute",
          bottom: "-10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => sliderRef.current.slickPrev()}
          sx={{ textTransform: "none" }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          color="primary"
          endIcon={<ArrowForwardIcon />}
          onClick={() => sliderRef.current.slickNext()}
          sx={{ textTransform: "none" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ServicesSlider;
