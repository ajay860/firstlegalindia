const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const { sendAppointmentConfirmation } = require('../utils/email');

// @route   POST /api/appointments
// @desc    Create a new appointment
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, service, preferredDate, preferredTime, notes } = req.body;

    // Check if the time slot is available
    const isAvailable = await Appointment.isTimeSlotAvailable(preferredDate, preferredTime);
    
    if (!isAvailable) {
      return res.status(400).json({ 
        success: false, 
        message: 'The selected time slot is not available. Please choose another time.' 
      });
    }

    // Create new appointment
    const appointment = new Appointment({
      name,
      email,
      phone,
      service,
      preferredDate,
      preferredTime,
      notes
    });

    await appointment.save();

    // Send confirmation email (in production, you might want to use a queue system for this)
    try {
      await sendAppointmentConfirmation(appointment);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      success: true,
      data: appointment,
      message: 'Appointment booked successfully!'
    });

  } catch (error) {
    console.error('Error booking appointment:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error booking appointment',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// @route   GET /api/appointments/available-slots
// @desc    Get available time slots for a given date
// @access  Public
router.get('/available-slots', async (req, res) => {
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({ 
        success: false, 
        message: 'Date is required' 
      });
    }

    // Get all appointments for the given date
    const appointments = await Appointment.find({
      preferredDate: new Date(date),
      status: { $in: ['pending', 'confirmed'] }
    });

    // Generate time slots (example: 9:00 AM to 6:00 PM, every 30 minutes)
    const timeSlots = [];
    const startHour = 9;
    const endHour = 18;
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of ['00', '30']) {
        timeSlots.push(`${hour.toString().padStart(2, '0')}:${minute}`);
      }
    }

    // Filter out booked time slots
    const bookedSlots = appointments.map(apt => apt.preferredTime);
    const availableSlots = timeSlots.filter(slot => !bookedSlots.includes(slot));

    res.status(200).json({
      success: true,
      data: availableSlots
    });

  } catch (error) {
    console.error('Error fetching available slots:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error fetching available slots',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

module.exports = router;
