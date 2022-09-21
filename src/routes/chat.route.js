const express = require("express");
const { getMessage, postMessage } = require("../controllers/chat.controller");
const router = express.Router();

router.get("/", getMessage);

router.get("/message", postMessage);

module.exports = router;
