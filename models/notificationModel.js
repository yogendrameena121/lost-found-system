const db = require("../config/db");

exports.create = (userId, message) => {
  return db.promise().query(
    "INSERT INTO notifications (user_id, message) VALUES (?, ?)",
    [userId, message]
  );
};

exports.getUserNotifications = (userId) => {
  return db.promise().query(
    "SELECT * FROM notifications WHERE user_id=? ORDER BY created_at DESC",
    [userId]
  );
};

exports.markRead = (id) => {
  return db.promise().query(
    "UPDATE notifications SET is_read=TRUE WHERE id=?",
    [id]
  );
};
