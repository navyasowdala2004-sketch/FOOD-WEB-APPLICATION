const express = require("express");

const router = express.Router();

const {
  placeOrder,
  getMyOrders,
  trackOrder,
  cancelOrder
} = require("../controllers/orderController");

const protect = require("../middleware/authMiddleware");

router.post(
  "/place",
  protect,
  placeOrder
);

router.get(
  "/myorders",
  protect,
  getMyOrders
);

router.get(
  "/track/:id",
  protect,
  trackOrder
);

router.put(
  "/cancel/:id",
  protect,
  cancelOrder
);

module.exports = router;