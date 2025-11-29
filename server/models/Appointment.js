const mongoose = require('mongoose');
const validator = require('validator');

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
    match: [/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, 'Please provide a valid phone number']
  },
  service: {
    type: String,
    required: [true, 'Please select a service'],
    enum: {
      values: ['taxation', 'accounting', 'audit', 'business', 'advisory'],
      message: 'Please select a valid service'
    }
  },
  preferredDate: {
    type: Date,
    required: [true, 'Please select a preferred date']
  },
  preferredTime: {
    type: String,
    required: [true, 'Please select a preferred time']
  },
  notes: {
    type: String,
    maxlength: [500, 'Notes cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add index for better query performance
appointmentSchema.index({ preferredDate: 1, preferredTime: 1 });

// Add a method to check if the time slot is available
appointmentSchema.statics.isTimeSlotAvailable = async function(preferredDate, preferredTime) {
  const existingAppointment = await this.findOne({
    preferredDate,
    preferredTime,
    status: { $in: ['pending', 'confirmed'] }
  });
  return !existingAppointment;
};

module.exports = mongoose.model('Appointment', appointmentSchema);
