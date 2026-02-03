const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const lost = require("../controllers/lostController");

router.post("/add", auth, lost.addLost);
router.get("/my", auth, lost.myLost);

module.exports = router;
