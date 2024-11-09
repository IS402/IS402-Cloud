import express from "express";
import {
  getAllCategories,
  getCategoryByName,
  getProductByCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/category.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllCategories);
router.get("/:id/products", protectRoute, adminRoute, getProductByCategory);
router.get("/:name", protectRoute, adminRoute, getCategoryByName);
router.post("/", protectRoute, adminRoute, createCategory);
router.patch("/:id", protectRoute, adminRoute, updateCategory);
router.delete("/:id", protectRoute, adminRoute, deleteCategory);

export default router;