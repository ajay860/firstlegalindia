import React, { useEffect, useState } from "react"
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
} from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import NavigateNextIcon from "@mui/icons-material/NavigateNext"
import PhoneIcon from "@mui/icons-material/Phone"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import ContactForm from "../../components/ContactForm"
import PageBreadcrumb from "../../components/common/PageBreadcrumb"
import {
  getServiceBySlug,
  clearService,
} from "../../features/services/serviceSlice"
import { getMegaMenuByKey, selectMegaMenu } from "../../features/megaMenuSlice"
import { siteContactConfig } from "../../config/siteConfig"

const IndustryDetail = () => {
  const { industrySlug } = useParams()
  const dispatch = useDispatch()

  const { title, phone, email, location, cta } = siteContactConfig

  /* ===== Mega Menu ===== */
  const { selected: megaMenu, loading: megaMenuLoading } =
    useSelector(selectMegaMenu)

  /* ===== Service ===== */
  const {
    service,
    loading: serviceLoading,
    error,
  } = useSelector((state) => state.services)

  /* ================= FETCH SERVICE ================= */
  useEffect(() => {
    if (industrySlug) {
      dispatch(getServiceBySlug(industrySlug))
    }

    return () => {
      dispatch(clearService())
    }
  }, [dispatch, industrySlug])

  /* ================= FETCH MEGA MENU ================= */
  useEffect(() => {
    if (service?.category_id) {
      dispatch(getMegaMenuByKey(service.category_id))
    }
  }, [dispatch, service?.category_id])

  if (serviceLoading) {
    return <Typography>Loading...</Typography>
  }

  if (error) {
    return <Typography color='error'>{error}</Typography>
  }

  const stats = [
    { value: "500+", label: "Clientele" },
    { value: "20+", label: "CA, CS & Lawyers" },
    { value: "3+", label: "Branches" },
  ]

  console.log("megaMenu >>>" ,megaMenu)

  return (
    <Box>
      {/* ================= HERO SECTION ================= */}
      <Box sx={{ bgcolor: "#f5f9ff", py: { xs: 4, md: 8 } }}>
        <Container maxWidth='lg'>
          <Grid className='row' spacing={4} alignItems='stretch'>
            {/* LEFT CONTENT */}
            <Grid className='col-sm-7' item xs={12}>
              <PageBreadcrumb
                items={[
                  { label: "Home", to: "/" },
                  {
                    label: megaMenu?.title || "Industries",
                    to: `/services/${megaMenu?.menu_key}`,
                  },
                ]}
                current={service?.sort_title}
              />

              <Typography
                variant='h3'
                fontWeight={700}
                color='success.main'
                gutterBottom
              >
                {service?.sort_title}
              </Typography>

              <Typography color='text.secondary' mb={4}>
                {service?.description}
              </Typography>

              <Grid container spacing={3} mb={4}>
                {stats.map((item, index) => (
                  <Grid item xs={4} key={index}>
                    <Typography variant='h5' fontWeight={700}>
                      {item.value}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.label}
                    </Typography>
                  </Grid>
                ))}
              </Grid>

              <Button
                variant='contained'
                size='large'
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
            <Grid className='col-sm-5' item xs={12}>
              <Paper
                sx={{
                  bgcolor: "#FFF",
                  p: 4,
                  borderRadius: 4,
                  height: "100%",
                  display: "none",
                }}
              >
                <ContactForm />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ================= MAIN CONTENT ================= */}
      <Container maxWidth='lg' sx={{ py: 6 }}>
        <Grid className='row' spacing={4}>
          {/* LEFT SIDEBAR */}
          <Grid className='col-sm-4' item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Typography fontWeight={700} mb={2}>
                Related Services
              </Typography>
              <List>
                {console.log(">>>", megaMenu)}
                {megaMenu?.data?.sections?.flatMap((section) =>
                  section.items.map((item) => (
                    <ListItem
                      key={item.link}
                      disableGutters
                      component={Link}
                      to={item.link}
                      sx={{ cursor: "pointer" }}
                    >
                      <ListItemIcon>
                        <CheckCircleIcon color='primary' />
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))
                )}
              </List>
              <hr />
              
              <Typography fontWeight={700} mb={2}>
                Contact Information
              </Typography>

              <Box display='flex' alignItems='center' mb={2}>
                <PhoneIcon sx={{ mr: 1 }} color='primary' />
                <Typography
                  component='a'
                  href={phone.link}
                  sx={{ textDecoration: "none" }}
                >
                  {phone.label}
                </Typography>
              </Box>

              <Box display='flex' alignItems='center' mb={2}>
                <EmailIcon sx={{ mr: 1 }} color='primary' />
                <Typography
                  component='a'
                  href={email.link}
                  sx={{ textDecoration: "none" }}
                >
                  {email.label}
                </Typography>
              </Box>

              <Box display='flex' alignItems='center'>
                <LocationOnIcon sx={{ mr: 1 }} color='primary' />
                <Typography>{location.label}</Typography>
              </Box>

              <Button
                variant='contained'
                fullWidth
                sx={{ mt: 3 }}
                component='a'
                href={cta.link}
              >
                {cta.text}
              </Button>

            </Paper>
          </Grid>

          {/* CENTER CONTENT */}
          <Grid className='col-sm-8' item xs={12}>
            {/* ADDITIONAL CONTENT */}
            <Paper sx={{ p: 4, mb: 5 }}>
                <div dangerouslySetInnerHTML={{
    __html: service?.article_content,
  }}>
                </div>
            </Paper>

            <Divider sx={{ mb: 4 }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default IndustryDetail
