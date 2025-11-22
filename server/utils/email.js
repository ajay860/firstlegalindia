const nodemailer = require('nodemailer');

// Create a transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Test the transporter connection
const verifyEmailConnection = async () => {
  try {
    await transporter.verify();
    console.log('Server is ready to take our messages');
  } catch (error) {
    console.error('Error verifying email connection:', error);
  }
};

// Send appointment confirmation email
const sendAppointmentConfirmation = async (appointment) => {
  if (process.env.NODE_ENV === 'test') return;

  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}>`,
    to: appointment.email,
    subject: 'Appointment Confirmation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Appointment Confirmation</h2>
        <p>Dear ${appointment.name},</p>
        <p>Thank you for booking an appointment with us. Here are your appointment details:</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Service:</strong> ${formatServiceName(appointment.service)}</p>
          <p><strong>Date:</strong> ${new Date(appointment.preferredDate).toDateString()}</p>
          <p><strong>Time:</strong> ${appointment.preferredTime}</p>
          ${appointment.notes ? `<p><strong>Notes:</strong> ${appointment.notes}</p>` : ''}
        </div>
        
        <p>We look forward to seeing you. If you need to reschedule or have any questions, please don't hesitate to contact us.</p>
        
        <p>Best regards,<br>Your Company Name</p>
        
        <div style="margin-top: 30px; font-size: 12px; color: #666;">
          <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${appointment.email}`);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

// Format service name for display
const formatServiceName = (service) => {
  const serviceNames = {
    taxation: 'Taxation Services',
    accounting: 'Accounting Services',
    audit: 'Audit & Assurance',
    business: 'Business Registration',
    advisory: 'Advisory Services'
  };
  return serviceNames[service] || service;
};

// Send contact form confirmation email
const sendContactConfirmation = async (contactMessage) => {
  if (process.env.NODE_ENV === 'test') return;

  const mailOptions = {
    from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_FROM_EMAIL}>`,
    to: contactMessage.email,
    subject: 'Thank you for contacting us',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Thank You for Contacting Us</h2>
        <p>Dear ${contactMessage.name},</p>
        <p>We have received your message and will get back to you as soon as possible. Here's a copy of your message for your reference:</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Subject:</strong> ${contactMessage.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${contactMessage.message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p>We typically respond within 24-48 hours. If your inquiry is urgent, please call us at [Your Phone Number].</p>
        
        <p>Best regards,<br>${process.env.EMAIL_FROM_NAME}</p>
        
        <div style="margin-top: 30px; font-size: 12px; color: #666;">
          <p>This is an automated message, please do not reply directly to this email.</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Contact confirmation email sent to ${contactMessage.email}`);
  } catch (error) {
    console.error('Error sending contact confirmation email:', error);
    throw error;
  }
};

module.exports = {
  transporter,
  verifyEmailConnection,
  sendAppointmentConfirmation,
  sendContactConfirmation,
  formatServiceName
};
