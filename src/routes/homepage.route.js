const router = require("express").Router();
// controller
const { homepage } = require("../controllers/homepage.controller");

// routes
router.get("/", homepage);

module.exports = router;
