const express = require("express");
const router = express.Router();

const { adminLogin } = require("../controller/Admin_LoginController");

router.post("/login", adminLogin);

module.exports = router;
