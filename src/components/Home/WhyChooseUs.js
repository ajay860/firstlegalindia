import { Box, Grid, Typography, useTheme } from "@mui/material"
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents" // trophy
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium" // award badge
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball" // vibrant
import PaidIcon from "@mui/icons-material/Paid" // personality / money icon
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  const theme = useTheme()

  return (
    <Box sx={{ py: 8, px: { xs: 2, md: 8 } }}>
      <Grid container spacing={6}>
        {/* LEFT SIDE */}
        <Grid item xs={12} md={6} size={6}>
          <Typography
            variant='subtitle1'
            sx={{ color: "primary.main", fontWeight: 700 }}
          >
            Why People Choose Us
          </Typography>

          <Typography
            variant='h4'
            sx={{ fontWeight: 700, mt: 2, lineHeight: 1.2 }}
          >
            Choose a certified and experienced <br /> compliance partner that
            understands
          </Typography>

          <Typography sx={{ mt: 2, color: "text.secondary", maxWidth: 500 }}>
            your concerns. We show excellence in compliance consulting and
            deliver unmatched results in any type of business or licence
            registration, ROC or MCA compliance. A team of certified CA, CS, and
            solicitors is here to guide.
          </Typography>

          {/* VISION CARD */}
          <Box
            sx={{
              mt: 5,
              p: 3,
              borderRadius: 3,
              backgroundColor: "#e8e8e8",
            }}
          >
            <Typography variant='h6' sx={{ fontWeight: 700 }}>
              Our Vision
            </Typography>

            <Typography sx={{ mt: 1, color: "text.secondary" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={6} size={6} sx={{
            display: 'flex',
            alignItems: 'flex-end'
        }}>
          <Box
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: "#E7F3F3",
            }}
          >
            <Grid
              container
              spacing={4}
              sx={{ width: "100%", alignItems: "flex-start" }}
            >
              {/* Professional */}
              <Grid item xs={12} sm={6} size={6}>
                <Box>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    <EmojiEventsIcon sx={{ fontSize: 50 }} />
                  </motion.div>
                  <Typography variant='h6' sx={{ fontWeight: 700, mt: 1 }}>
                    One Stop Solutions
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Grid>

              {/* Experienced */}
              <Grid item xs={12} sm={6} size={6}>
                <Box>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    <WorkspacePremiumIcon sx={{ fontSize: 50 }} />
                  </motion.div>
                  <Typography variant='h6' sx={{ fontWeight: 700, mt: 1 }}>
                    Absolutely No Risk
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Grid>

              {/* Vibrant */}
              <Grid item xs={12} sm={6} size={6}>
                <Box>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    <SportsBasketballIcon sx={{ fontSize: 50 }} />
                  </motion.div>
                  <Typography variant='h6' sx={{ fontWeight: 700, mt: 1 }}>
                    Tailored Quotations
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Grid>

              {/* Personality */}
              <Grid item xs={12} sm={6} size={6}>
                <Box>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ display: "inline-block" }}
                  >
                    <PaidIcon sx={{ fontSize: 50 }} />
                  </motion.div>
                  <Typography variant='h6' sx={{ fontWeight: 700, mt: 1 }}>
                    Cost and Time Efficiency
                  </Typography>
                  <Typography sx={{ color: "text.secondary", mt: 1 }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}
