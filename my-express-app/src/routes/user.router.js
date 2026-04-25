const express = require("express");

const router = express.Router();

const { index, byId } = require("../controllers/user.controller");

router.get("/", index);
router.get ("/:id", byId);

module.exports = router;