import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Card,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useParams } from "react-router-dom";

/* ================= BREADCRUMB ================= */
const PageBreadcrumb = ({ current }) => (
  <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ mb: 3 }}>
    <Link underline="hover" color="inherit" href="/">
      Home
    </Link>
    <Link underline="hover" color="inherit" href="/industries">
      Industries
    </Link>
    <Typography color="text.primary">{current}</Typography>
  </Breadcrumbs>
);

const IndustryDetail = () => {
  const { industrySlug } = useParams();

  const stats = [
    { value: "500+", label: "Clientele" },
    { value: "20+", label: "CA, CS & Lawyers" },
    { value: "3+", label: "Branches" },
  ];

  const steps = [
    { number: "1", title: "Documentation", description: "Submit required documents" },
    { number: "2", title: "Application Filing", description: "We file with authorities" },
    { number: "3", title: "Registration", description: "Receive certificate" },
  ];

  const documents = [
    "PAN Card & Aadhaar Card",
    "Business Address Proof",
    "Passport Size Photographs",
    "Board Resolution",
    "NOC from Owner",
    "Business Plan",
    "Financial Projections",
    "KYC of Directors",
  ];

  return (
    <Box>
      {/* ================= HERO SECTION ================= */}
      <Box sx={{ bgcolor: "#f5f9ff", py: { xs: 4, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid className="row" spacing={4} alignItems="stretch">
            {/* LEFT CONTENT */}
            <Grid className="col-sm-7" item xs={12}>
              <PageBreadcrumb current="Microfinance Company Registration" />

              <Typography variant="h3" fontWeight={700} color="success.main" gutterBottom>
                Microfinance Company Registration
              </Typography>

              <Typography color="text.secondary" mb={4}>
                Hire CAAQ Consultancy to register your Microfinance Company with
                complete legal compliance and expert support.
              </Typography>

              <Grid container spacing={3} mb={4}>
                {stats.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <Typography variant="h5" fontWeight={700}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "#003f5c",
                  px: 4,
                  py: 1.5,
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Schedule Free Consultation
              </Button>
            </Grid>

            {/* RIGHT FORM */}
            <Grid className="col-sm-5" item xs={12}>
              <Paper sx={{ bgcolor: "#d9efff", p: 4, borderRadius: 4, height: "100%" }}>
                <Typography variant="h6" fontWeight={700} textAlign="center" mb={3}>
                  Free Consultation by Expert
                </Typography>

                <TextField fullWidth placeholder="Your Name" sx={{ mb: 2 }} />
                <TextField fullWidth placeholder="Your Email" sx={{ mb: 2 }} />
                <TextField fullWidth placeholder="Your Phone Number" sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  placeholder="Your Message"
                  multiline
                  rows={4}
                  sx={{ mb: 3 }}
                />

                <Button
                  fullWidth
                  size="large"
                  sx={{
                    bgcolor: "#6fb34a",
                    color: "white",
                    borderRadius: "30px",
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  Submit
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid className="row" spacing={4}>
          {/* LEFT SIDEBAR */}
          <Grid className="col-sm-4" item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography fontWeight={700} mb={2}>
                Related Services
              </Typography>
              <List>
                {["Unlock Your Potential: Register Your Microfinance Company", "Public Limited Company", "Startup India Registration", "OPC Registration", "Nidhi Company Registration", "FPO Registration Services", "Partnership Firm Registration", "Pvt. Ltd. Company Registration Services", "Sole Proprietorship Registration Services", "LLP Registration Services"].map(
                  (item, i) => (
                    <ListItem key={i} disableGutters>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  )
                )}
              </List>
              <hr />
              <Typography fontWeight={700} mb={2}>
                Contact Information
              </Typography>

              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ mr: 1 }} color="primary" />
                <Typography>+91 1234567890</Typography>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <EmailIcon sx={{ mr: 1 }} color="primary" />
                <Typography>info@example.com</Typography>
              </Box>

              <Box display="flex" alignItems="center">
                <LocationOnIcon sx={{ mr: 1 }} color="primary" />
                <Typography>India</Typography>
              </Box>

              <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                Call Now
              </Button>
            </Paper>
          </Grid>

          {/* CENTER CONTENT */}
          <Grid className="col-sm-8" item xs={12}>
            {/* ADDITIONAL CONTENT */}
            <Paper sx={{ p: 4, mb: 5 }}>
              <Typography variant="h4" fontWeight={700} gutterBottom>
                Unlock Your Potential: Register Your Microfinance Company
              </Typography>

              <Typography paragraph color="text.secondary">
                Microfinance companies provide financial support to low-income
                groups, helping drive financial inclusion and economic growth.
              </Typography>

              <Typography paragraph color="text.secondary">
                CAAQ offers end-to-end consulting services for microfinance
                registration, funding assistance, and compliance support.
              </Typography>

              <Typography color="text.secondary">
                We promote responsible lending, women entrepreneurship, and
                sustainable growth without over-borrowing risks.
              </Typography>
            </Paper>

            <Divider sx={{ mb: 4 }} />

            {/* STEPS */}
            <Typography variant="h5" fontWeight={700} mb={3}>
              Simple 3-Step Process
            </Typography>

            <Grid container spacing={3} mb={5}>
              {steps.map((step, i) => (
                <Grid item xs={12} sm={4} key={i}>
                  <Card sx={{ p: 3, textAlign: "center", height: "100%" }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: "50%",
                        mx: "auto",
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.number}
                    </Box>
                    <Typography fontWeight={600}>{step.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* DOCUMENTS */}
            <Typography variant="h5" fontWeight={700} mb={2}>
              Documents Required
            </Typography>

            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Supporting Documents</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {documents.map((doc, i) => (
                    <TableRow key={i}>
                      <TableCell>{doc}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default IndustryDetail;
