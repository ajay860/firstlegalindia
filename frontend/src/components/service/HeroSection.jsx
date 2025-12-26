// components/service/HeroSection.jsx
import { Box, Typography, Button } from "@mui/material"

const HeroSection = () => {
  return (
    <Box
      component="section"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        bgcolor: "#F5F5F5",
      }}
    >
      <Box maxWidth="md">
        <Typography variant="h2" fontWeight={700} gutterBottom>
          Reliable Accounting Services
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          We provide tailored accounting services to help your business grow.
        </Typography>

        <Button
          variant="contained"
          size="large"
          sx={{ px: 4, borderRadius: 5 }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

export default HeroSection
