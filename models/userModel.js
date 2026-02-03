const db = require("../config/db");

exports.create = (name, email, password) =>
  db.promise().query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [name, email, password]
  );

exports.findByEmail = email =>
  db.promise().query("SELECT * FROM users WHERE email=?", [email]);
