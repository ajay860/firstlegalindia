import { React, useEffect } from "react"
import ServicesSlider from "./ServicesSlider"
import { getHomeServices } from "../../features/services/serviceSlice"
import { useDispatch, useSelector } from "react-redux"

import {
  Box,
  CircularProgress,
  Typography,
} from "@mui/material"

const ServicesSection = () => {
  const dispatch = useDispatch()

  const { loading, error, homeServices } = useSelector(
    (state) => state.services
  )

  useEffect(() => {
    dispatch(getHomeServices())
  }, [dispatch])

  return (
    <div>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error" sx={{ textAlign: "center", mt: 6 }}>
          {error}
        </Typography>
      ) : homeServices?.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 6 }}>
          No services found.
        </Typography>
      ) :  <ServicesSlider services={homeServices} /> }
    </div>
  )
}

export default ServicesSection
