const pool = require("../config/db");


/**
 * GET HOME PAGE SERVICES
 * Returns only required fields
 */
const getHomeServices = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM services WHERE display_to_home = TRUE ORDER BY id DESC`
    );
    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.error("❌ Get Home Services Error FULL:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch service",
    });
  }
};


/**
 * CREATE SERVICE
 */
const createService = async (req, res) => {
  const {
    title,
    sort_title,
    description,
    bgImage,
    link,
    category_id = null,
    sub_category_id = null,
    display_to_home = false,
    article_content = "",
  } = req.body;

  try {
    const { rows } = await pool.query(
  `INSERT INTO services
   (title, sort_title, description, bgImage, link, category_id, sub_category_id, display_to_home, article_content, created_at, updated_at)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NOW(), NOW())
   RETURNING *`,
  [title, sort_title, description, bgImage, link, category_id, sub_category_id, display_to_home, article_content]
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

/**
 * GET ALL SERVICES
 * Optional filter: ?display_to_home=true
 */
const getAllServices = async (req, res) => {
  const { display_to_home } = req.query;

  try {
    let query = "SELECT * FROM services";
    let values = [];

    if (display_to_home !== undefined) {
      query += " WHERE display_to_home = $1";
      values.push(display_to_home === "true");
    }

    query += " ORDER BY id DESC";

    const { rows } = await pool.query(query, values);

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

/**
 * GET SERVICE BY ID
 */
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const { rows } = await pool.query("SELECT * FROM services WHERE id = $1", [id]);

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error("Get Service By ID Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};

/**
 * UPDATE SERVICE
 */
const updateService = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    bgImage,
    link,
    category_id,
    sub_category_id,
    display_to_home,
    article_content,
  } = req.body;

  try {
    const { rowCount, rows } = await pool.query(
      `UPDATE services
       SET
         title = $1,
         description = $2,
         bgImage = $3,
         link = $4,
         category_id = $5,
         sub_category_id = $6,
         display_to_home = $7,
         article_content = $8,
         updated_at = NOW()
       WHERE id = $9
       RETURNING *`,
      [title, description, bgImage, link, category_id, sub_category_id, display_to_home, article_content, id]
    );

    if (!rowCount) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error("Update Service Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update service",
    });
  }
};

/**
 * DELETE SERVICE
 */
const deleteService = async (req, res) => {
  const { id } = req.params;

  try {
    const { rowCount } = await pool.query("DELETE FROM services WHERE id = $1", [id]);

    if (!rowCount) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (error) {
    console.error("Delete Service Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to delete service",
    });
  }
};

const getServiceBySlug = async (req, res) => {
  const { slug } = req.params;
  
  try {
    const { rows } = await pool.query(
      "SELECT * FROM services WHERE link = $1",
      [slug]
    );

    if (!rows.length) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: rows[0],
    });
  } catch (error) {
    console.error("Get Service By Slug Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch service",
    });
  }
};




module.exports = {
  createService,
  getAllServices,
  getServiceById,
  updateService,
  deleteService,
  getHomeServices,
  getServiceBySlug
};
