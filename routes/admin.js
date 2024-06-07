const express = require("express");
const adminController = require("../controllers/admin");
const routes = express.Router();
routes.use("/add-product", adminController.getaddproduct);
routes.use("/products", adminController.getProducts);
module.exports = routes;
