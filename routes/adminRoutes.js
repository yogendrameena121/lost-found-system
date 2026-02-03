const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const admin = require("../controllers/adminController");

router.get("/pending", auth, role("admin"), admin.getPending);

router.post(
  "/:type/:id/:decision",
  auth,
  role("admin"),
  admin.updateStatus
);

module.exports = router;
