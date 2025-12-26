import { Box, Container, Typography, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
        color: "#fff",
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography
            variant="h3"
            fontWeight={800}
            sx={{ letterSpacing: "-0.5px" }}
          >
            Ready to Get Started?
          </Typography>

          <Typography
            variant="h6"
            sx={{ opacity: 0.9, maxWidth: 520 }}
          >
            Contact us today and let our experts guide you every step of the way.
          </Typography>

          <Button
            size="large"
            variant="contained"
            onClick={() => navigate("/contact")}
            sx={{
              mt: 2,
              px: 5,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              borderRadius: "50px",
              bgcolor: "#fff",
              color: "primary.main",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
