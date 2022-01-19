const { Router } = require("express");
const categories = Router();
const getCategories = require("./controllerGet/getCategories");
const createCategories = require("./controllerPost/createCategory.controller");

categories.route("/").post(createCategories);
categories.route("/").get(getCategories);

module.exports = categories;
