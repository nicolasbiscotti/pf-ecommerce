const { Router } = require("express");
const deleteCategories = require("./controllerDelete");
const categories = Router();
const getCategories = require("./controllerGet/getCategories");
const createCategories = require("./controllerPost/createCategory.controller");

categories.route("/").post(createCategories);
categories.route("/").get(getCategories);
categories.route("/:id").delete(deleteCategories);

module.exports = categories;
