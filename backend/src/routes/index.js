const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const products = require("./products/get/products");
const suppliers = require("./suppliers/post/suppliers");
const productById = require("./products/get/productById");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/products", products);
router.use("/products/id/", productById);
router.use("/suppliers", suppliers);
module.exports = router;
