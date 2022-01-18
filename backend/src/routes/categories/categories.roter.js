const { Router } = require("express");
const categories = Router();
const createCategories = require("./controllerPost/createCategory.controller");

categories.route("/").post(createCategories);

module.exports = categories;
