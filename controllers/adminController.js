const db = require("../config/db");
const Notification = require("../models/notificationModel");

/**
 * Get all pending lost & found items
 */
exports.getPending = async (req, res) => {
  try {
    const [rows] = await db.promise().query(`
      SELECT id, item_name, location, image, 'lost' AS type, user_id
      FROM lost_items WHERE status='pending'
      UNION ALL
      SELECT id, item_name, location, image, 'found' AS type, user_id
      FROM found_items WHERE status='pending'
    `);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

/**
 * Approve / Reject item
 */
exports.updateStatus = async (req, res) => {
  try {
    const { type, id, decision } = req.params;

    const table = type === "lost" ? "lost_items" : "found_items";
    const status = decision === "approve" ? "approved" : "rejected";

    // Update item status
    const [[item]] = await db.promise().query(
      `SELECT user_id, item_name FROM ${table} WHERE id=?`,
      [id]
    );

    await db.promise().query(
      `UPDATE ${table} SET status=? WHERE id=?`,
      [status, id]
    );

    // Notify owner
    await Notification.create(
      item.user_id,
      `Your ${type} item "${item.item_name}" was ${status} by admin.`
    );

    res.send("Updated");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};
