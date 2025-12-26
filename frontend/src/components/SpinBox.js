import { Box, Typography } from "@mui/material";
import { motion } from "motion/react";
import { Check as CheckIcon } from "@mui/icons-material";

const SpinBox = ({ text, icon: Icon, textOrder = "2" }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        flexDirection: textOrder === "1" ? "row-reverse" : "row",
      }}
    >
      {/* Circle */}
      <Box
        sx={{
          width: "120px",
          height: "120px",
          background: "linear-gradient(90deg, #00897b, #09ae9dff)",
          borderRadius: "120px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 2,
          position: "relative",
        }}
      >
        {/* Rotating border */}
        <motion.div
          style={{ position: "absolute" }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Box
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "100px",
              border: "2px dashed white",
            }}
          />
        </motion.div>

        {/* Center icon (static) */}
         {/* Dynamic icon */}
        {Icon && (
          <Icon
            sx={{
              color: "white",
              fontSize: "40px",
              position: "relative",
              zIndex: 2,
            }}
          />
        )}
      </Box>

      {/* Dynamic text */}
      <Typography variant="h6" align="center" sx={{ maxWidth: 150 }}>   
        {text}
      </Typography>
    </Box>
  );
};

export default SpinBox;
