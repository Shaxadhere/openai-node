const express = require("express")
const { talk } = require("../controllers/talk")
const router = express.Router()

router.get("/", talk)

module.exports = router