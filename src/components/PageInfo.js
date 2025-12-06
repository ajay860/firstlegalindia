import React from "react"
import { Container, Typography, Box, Link, Breadcrumbs } from "@mui/material"

const PageInfo = ({
  title = "About Us",
  subtitle = "Legal made simple. Compliance without confusion.",
  tagline = '',
  backgroundImage = "/about-us.png",
  breadcrumbs = [], // array of { label: string, href?: string }
}) => {
  return (
    <Box
      sx={{
        background: `#333 url("${backgroundImage}") center/cover no-repeat`,
        color: "white",
        py: { xs: 9, md: 11 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 50%)",
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth='lg'
        sx={{ position: "relative", zIndex: 2, textAlign: "center" }}
      >
        <Typography
          variant='h1'
          component='h1'
          sx={{
            fontWeight: 800,
            mb: 3,
            fontSize: { xs: "2.5rem", md: "4rem" },
            lineHeight: 1.1,
            textShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant='h4'
          component='p'
          sx={{
            maxWidth: "800px",
            mx: "auto",
            opacity: 0.9,
            lineHeight: 1.6,
            fontSize: { xs: "1.25rem", md: "1.5rem" },
            mb: 3,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant='h6'
          component='p'
          sx={{
            maxWidth: "700px",
            mx: "auto",
            opacity: 0.85,
            fontStyle: "italic",
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 2,
            fontWeight: 300,
          }}
        >
          {tagline}
        </Typography>
        {breadcrumbs.length > 0 && (
          <Breadcrumbs
            sx={{
              mb: 2,
              justifyContent: "center",
              display: "flex",
              color: "rgba(255,255,255,0.8)",
              "& a": {
                color: "white",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              },
            }}
          >
            {breadcrumbs.map((crumb, index) =>
              crumb.href ? (
                <Link key={index} href={crumb.href}>
                  {crumb.label}{" "}
                </Link>
              ) : (
                <Typography key={index} color='white'>
                  {crumb.label}{" "}
                </Typography>
              )
            )}{" "}
          </Breadcrumbs>
        )}
      </Container>
    </Box>
  )
}

export default PageInfo
