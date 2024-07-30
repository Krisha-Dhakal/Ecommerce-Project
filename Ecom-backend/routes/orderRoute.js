const express = require("express");
const router = new express.Router();

const {
  createOrder,
  getAllOrders,
  updateOrder,
  getOrderById,
  deleteOrder,
  updateOrderStatus,
} = require("../controller/orderController");

// creating all routes and their corresponding controller function
router.post("/", createOrder);
router.get("/", getAllOrders);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);
router.patch("/:id", updateOrderStatus);

module.exports = router;
