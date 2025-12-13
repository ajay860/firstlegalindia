import React from "react"
import Slider from "react-slick"
import { Box, Typography, Card, CardContent, Avatar } from "@mui/material"
import Rating from "@mui/material/Rating"

const testimonials = [
  {
    name: "Amit Sharma",
    role: "Product Manager",
    rating: 5,
    image: "/avatar1.jpg",
    message:
      "The experience was outstanding. Clean UI, fast delivery, and excellent communication.",
  },
  {
    name: "Neha Verma",
    role: "Startup Founder",
    rating: 5,
    image: "/avatar2.jpg",
    message:
      "Very professional team. Our product quality improved significantly.",
  },
  {
    name: "Rahul Singh",
    role: "CTO",
    rating: 4,
    image: "/avatar3.jpg",
    message:
      "Strong technical expertise and reliable support throughout the project.",
  },
]

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 900, settings: { slidesToShow: 1 } },
  ],
}

const getInitials = (name = "") => {
  const parts = name.trim().split(" ")
  const first = parts[0]?.[0] || ""
  const last = parts[1]?.[0] || ""
  return (first + last).toUpperCase()
}

const Testimonials = () => {
  return (
    <Box>
      {/* Header */}
      <Box textAlign='center' mb={6}>
        <Typography
          variant='h3'
          component='h2'
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          What Our Clients Say
        </Typography>
        <Typography color='text.secondary' mt={1}>
          Trusted by startups and enterprises worldwide
        </Typography>
      </Box>

      {/* Slider */}
      <Box maxWidth={1300} mx='auto' px={2}>
        <Slider {...sliderSettings}>
          {testimonials.map((item, index) => (
            <Box key={index} px={2}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 4,
                  //   backdropFilter: "blur(10px)",
                  //   background:
                  //     "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))",
                  //   boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    // boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  {/* Quote */}
                  <Typography
                    sx={{
                      position: "relative",
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      color: "text.secondary",
                      pl: 3,
                    }}
                  >
                    <Box
                      component='span'
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: -12,
                        fontSize: "3rem",
                        color: "primary.main",
                        fontWeight: 700,
                        opacity: 0.2,
                      }}
                    >
                      “
                    </Box>
                    {item.message}
                  </Typography>
                  {/* User */}
                  <Box display='flex' alignItems='center' gap={2}>
                    {/* <Avatar
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 28,
                        height: 28,
                        background:
                          "linear-gradient(135deg, #d1e9e6, #6cc7bcff)",
                        fontWeight: 700,
                        color: "#fff",
                      }}
                    >
                      {getInitials(item.name)}
                    </Avatar> */}
                    <Box>
                      <Typography fontWeight={600} sx={{ p: 2.5 }}>{item.name}</Typography>
                      {/* <Typography variant='body2' color='text.secondary'>
                        {item.role}
                      </Typography>
                    //   <Rating value={item.rating} readOnly size='small' /> */}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default Testimonials
