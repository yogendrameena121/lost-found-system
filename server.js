require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

require("./config/db");

app.use("/", require("./routes/authRoutes"));
app.use("/lost", require("./routes/lostRoutes"));
app.use("/admin", require("./routes/adminRoutes"));

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on http://localhost:${process.env.PORT}`)
);
