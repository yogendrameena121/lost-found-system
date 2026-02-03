const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const lost = require("../controllers/lostController");
const upload = require("../config/upload");

router.post("/add", auth, upload.single("image"), lost.addLost);
router.get("/my", auth, lost.myLost);

module.exports = router;
