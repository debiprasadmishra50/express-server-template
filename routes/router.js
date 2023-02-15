const express = require("express");
const controller = require("./../controller/controller");

const router = express.Router();

router.get("/hello", controller.getHello);

module.exports = router;
