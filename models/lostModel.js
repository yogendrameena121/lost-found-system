const db = require("../config/db");

exports.add = (data) =>
  db.promise().query(
    "INSERT INTO lost_items (user_id,item_name,category,description,location,lost_date,image) VALUES (?,?,?,?,?,?,?)",
    data
  );

exports.myItems = userId =>
  db.promise().query("SELECT * FROM lost_items WHERE user_id=?", [userId]);
