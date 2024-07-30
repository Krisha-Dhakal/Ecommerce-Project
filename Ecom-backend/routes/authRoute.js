const express = require("express");
const router = express.Router();
const { userLogin } = require("../auth/userLogin");

router.post("/", userLogin);

module.exports = router;
