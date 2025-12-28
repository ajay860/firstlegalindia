const pool = require("../config/db");

/**
 * Create Mega Menu
 */
exports.createMegaMenu = async (req, res) => {
  try {
    const { menu_key, title, data } = req.body;

    if (!menu_key || !title || !data) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const result = await pool.query(
      `INSERT INTO mega_menus (menu_key, title, data)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [menu_key, title, data]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({ message: "Menu key already exists" });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.updateMegaMenu = async (req, res) => {
  try {
    const { menu_key } = req.params;
    const { title, data } = req.body;

    if (!title || !data) {
      return res.status(400).json({ message: "Title and data are required" });
    }

    const result = await pool.query(
      `UPDATE mega_menus
       SET title = $1, data = $2, updated_at = NOW()
       WHERE menu_key = $3
       RETURNING *`,
      [title, data, menu_key]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Get Mega Menu by key
 */
exports.getMegaMenuByKey = async (req, res) => {
  try {
    const { menu_key } = req.params;

    const result = await pool.query(
      `SELECT menu_key, title, data
       FROM mega_menus
       WHERE menu_key = $1 AND is_active = true`,
      [menu_key]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Update Mega Menu
 */
exports.deleteMegaMenu = async (req, res) => {
  try {
    const { menu_key } = req.params;

    const result = await pool.query(
      `DELETE FROM mega_menus WHERE menu_key = $1 RETURNING *`,
      [menu_key]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.json({ message: "Menu permanently deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

/**
 * Soft Delete Mega Menu
 */
exports.deleteMegaMenu = async (req, res) => {
  try {
    const { menu_key } = req.params;

    const result = await pool.query(
      `UPDATE mega_menus
       SET is_active = false, updated_at = NOW()
       WHERE menu_key = $1
       RETURNING *`,
      [menu_key]
    );

    if (!result.rows.length) {
      return res.status(404).json({ message: "Menu not found" });
    }

    res.json({ message: "Menu deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getAllMegaMenus = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, menu_key, title, data, created_at, updated_at
       FROM mega_menus
       WHERE is_active = true
       ORDER BY created_at DESC`
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
