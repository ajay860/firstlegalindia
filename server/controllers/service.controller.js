const pool = require("../config/db");

// Create service
const createService = async (req, res) => {
  const { title, description, bgImage, link } = req.body;

  try {
    const { rows } = await pool.query(
      `INSERT INTO services
       (title, description, bgImage, link)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [title, description, bgImage, link]
    );

    res.status(201).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error("Create Service Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create service",
    });
  }
};

// Get all services
const getAllServices = async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM services ORDER BY id DESC"
    );

    res.status(200).json({
      success: true,
      count: rows.length,
      data: rows,
    });
  } catch (error) {
    console.error("Get Services Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch services",
    });
  }
};

module.exports = {
  createService,
  getAllServices,
};
