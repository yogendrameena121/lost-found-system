const Lost = require("../models/lostModel");

exports.addLost = async (req, res) => {
  const { item_name, category, description, location, lost_date } = req.body;
  await Lost.add([
    req.user.id,
    item_name,
    category,
    description,
    location,
    lost_date,
    imagePath
  ]);
  res.send("Lost item reported");
};

exports.myLost = async (req, res) => {
  const [rows] = await Lost.myItems(req.user.id);
  res.json(rows);
};
