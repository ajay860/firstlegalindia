import { 
  Container, 
  Typography, 
  Box, 
  Grid,
  Button,
  Link
} from '@mui/material';

const HomeAboutUs = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700 }}>
                Struggling to get your taxes straight?
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph>
                Your trusted partner for Taxation, Accounting, Audit, and Business Advisory services.
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                We provide customers with the best tax preparation services at an unbeatable price. Our services range from providing accounting services for personal taxes to corporate taxes for small, medium and large companies.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={Link}
                to="/about"
                sx={{ mt: 2 }}
              >
                Learn More About Us
              </Button>
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Financial Meeting"
                sx={{ 
                  width: '100%', 
                  borderRadius: 2,
                  boxShadow: 3
                }}
              />
            </Grid> */}
          </Grid>
        </Container>
      </Box>
  );
}                               
export default HomeAboutUs;         