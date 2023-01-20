const express = require("express");
const { generateImage } = require("../controllers/openaiControllers");

const router = express.Router();

router.post("/images", generateImage)

module.exports = router;