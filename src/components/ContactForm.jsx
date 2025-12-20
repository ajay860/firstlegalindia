import React from "react"
import {
  Typography,
  Grid,
  TextField,
  Button,
  useTheme,
  useMediaQuery,
  MenuItem,
} from "@mui/material"

import { useDispatch, useSelector } from "react-redux"
import {
  sendContactMessage,
  resetContactState,
} from "../features/contact/contactSlice"

const serviceOptions = [
  "Talk To Expert",
  "Company Registration",
  "GST Registration",
  "Income Tax Filing",
  "Trademark Registration",
  "Accounting & Bookkeeping",
]

const ContactForm = () => {
  const dispatch = useDispatch()
  const { loading, success, error } = useSelector((state) => state.contact)

  const [formData, setFormData] = React.useState({
    user_name: "",
    phone_number: "",
    service_chosen: "Talk To Expert",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendContactMessage(formData))
  }

  React.useEffect(() => {
    if (success) {
      setFormData({
        user_name: "",
        phone_number: "",
        service_chosen: "Talk To Expert",
        message: "",
      })
      setTimeout(() => dispatch(resetContactState()), 3000)
    }
  }, [success, dispatch])

  return (
    <>
      {success && (
        <Typography color='success.main' sx={{ mt: 2, mb: 3 }} fontWeight={600}>
          Message sent successfully!
        </Typography>
      )}

      {error && (
        <Typography color='error.main' sx={{ mt: 2, mb: 3 }} fontWeight={600}>
          {error}
        </Typography>
      )}
      <form onSubmit={handleSubmit}>
        <Grid className='row' spacing={5}>
          <Grid className='col-sm-6 mb-4'>
            <TextField
              fullWidth
              label='Your Name'
              name='user_name'
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid className='col-sm-6 mb-4'>
            <TextField
              fullWidth
              label='Phone Number'
              name='phone_number'
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
          </Grid>

          {/* SERVICE DROPDOWN */}
          <Grid className='col-sm-12 mb-4'>
            <TextField
              select
              fullWidth
              label='Choose Service'
              name='service_chosen'
              value={formData.service_chosen}
              onChange={handleChange}
            >
              {serviceOptions.map((service) => (
                <MenuItem key={service} value={service}>
                  {service}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid className='col-sm-12'>
            <TextField
              fullWidth
              label='Your Message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={3}
            />
          </Grid>

          <Grid className='col-sm-12' xs={12}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
              disabled={loading}
            >
              {loading ? "Sending..." : "Talk To Our Experts"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default ContactForm
