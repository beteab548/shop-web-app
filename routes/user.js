const express = require("express");
const adminController = require("../controllers/user");
const Controller404 = require("../controllers/404page");
const route = express.Router();
route.use("/index", adminController.getIndexPage);
route.use("/", Controller404.get404page);
module.exports = route;
