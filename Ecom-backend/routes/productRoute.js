const express = require("express");
const router = new express.Router();

const authenticate = require("../middleware/authenticate");

const {
  createProduct,
  getProducts,
  getProductById,
  deleteProductById,
  putProductById,
} = require("../controller/productController");

router.post("/", authenticate, createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);
router.put("/:id", authenticate, putProductById);
router.delete("/:id", authenticate, deleteProductById);

module.exports = router;
