const { Router } = require("express");
const products = require("./products/get/products");
const suppliers = require("./suppliers/post/suppliers")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/products", products);
router.use("/suppliers", suppliers);
module.exports = router;
