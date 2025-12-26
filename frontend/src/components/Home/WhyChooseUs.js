import { 
  Typography, 
  Box, 
} from '@mui/material';
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents" // trophy
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium" // award badge
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball" // vibrant
import PaidIcon from "@mui/icons-material/Paid" // personality / money icon
import { motion } from "framer-motion"

export default function WhyChooseUs() {
  return (
    <Box className="py-5">
      {/* Parent Row */}
      <div className="row gy-5">
        {/* LEFT SIDE */}
        <div className="col-12 col-md-6">
          <Typography variant="subtitle1" className="text-primary fw-bold">
            Why People Choose Us
          </Typography>

          <Typography variant="h4" className="fw-bold mt-2" style={{ lineHeight: 1.2 }}>
            Choose a certified and experienced <br /> compliance partner that
            understands
          </Typography>

          <Typography className="mt-2 text-secondary" style={{ maxWidth: 500 }}>
            your concerns. We show excellence in compliance consulting and
            deliver unmatched results in any type of business or licence
            registration, ROC or MCA compliance. A team of certified CA, CS, and
            solicitors is here to guide.
          </Typography>

          {/* VISION CARD */}
          <Box
            className="mt-5 p-3 rounded-3"
            style={{ backgroundColor: "#e8e8e8" }}
          >
            <Typography variant="h6" className="fw-bold">
              Our Vision
            </Typography>

            <Typography className="mt-1 text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography>
          </Box>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-12 col-md-6 d-flex align-items-center justify-content-center flex-column">
          <Box
            className="p-4 rounded-4 w-100 mt-auto"
            style={{ backgroundColor: "#E7F3F3" }}
          >
            {/* Child Row to hold each icon */}
            <div className="row gy-4">
              {/* Professional */}
              <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >
                  <EmojiEventsIcon style={{ fontSize: 50 }} />
                </motion.div>
                <Typography variant="h6" className="fw-bold mt-1">
                  One Stop Solutions
                </Typography>
                <Typography className="text-secondary mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </div>

              {/* Experienced */}
              <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >
                  <WorkspacePremiumIcon style={{ fontSize: 50 }} />
                </motion.div>
                <Typography variant="h6" className="fw-bold mt-1">
                  Absolutely No Risk
                </Typography>
                <Typography className="text-secondary mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </div>

              {/* Vibrant */}
              <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >
                  <SportsBasketballIcon style={{ fontSize: 50 }} />
                </motion.div>
                <Typography variant="h6" className="fw-bold mt-1">
                  Tailored Quotations
                </Typography>
                <Typography className="text-secondary mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </div>

              {/* Personality */}
              <div className="col-12 col-sm-6 col-md-6 d-flex flex-column align-items-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{ display: "inline-block" }}
                >
                  <PaidIcon style={{ fontSize: 50 }} />
                </motion.div>
                <Typography variant="h6" className="fw-bold mt-1">
                  Cost and Time Efficiency
                </Typography>
                <Typography className="text-secondary mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </Typography>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </Box>
  )
}
