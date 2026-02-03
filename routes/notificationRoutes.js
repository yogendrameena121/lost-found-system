const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const Notification = require("../models/notificationModel");

router.get("/", auth, async (req, res) => {
  const [rows] = await Notification.getUserNotifications(req.user.id);
  res.json(rows);
});

router.post("/read/:id", auth, async (req, res) => {
  await Notification.markRead(req.params.id);
  res.sendStatus(200);
});

module.exports = router;
