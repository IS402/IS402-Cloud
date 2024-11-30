import express from "express";
import { createOrder, getOrderDetails } from "../controllers/payment.controller.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Create an order
router.post("/create", protectRoute, createOrder);

// Get order details
router.get("/:orderId", protectRoute, getOrderDetails);

export default router;
