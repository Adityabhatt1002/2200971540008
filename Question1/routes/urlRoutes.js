const express = require("express");
const router = express.Router();
const { createShortURL } = require("../controllers/urlController");

router.post("/shorturls", createShortURL);

module.exports = router;
