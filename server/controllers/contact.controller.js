const pool = require("../config/db");

// Create contact
const createContact = async (req, res) => {
  const { user_name, phone_number, service_chosen, message } = req.body;

  try {
    const { rows } = await pool.query(
      `INSERT INTO contact_us 
       (user_name, phone_number, service_chosen, message)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_name, phone_number, service_chosen, message]
    );

    res.status(201).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error('Create Contact Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create contact',
    });
  }
};

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM contact_us ORDER BY created_at DESC'
    );

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error('Get Contacts Error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts',
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
};
