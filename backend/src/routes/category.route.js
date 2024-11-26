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

// router.get("/", protectRoute, adminRoute, getAllCategories);
router.get("/", getAllCategories);
// router.get("/:id/products", protectRoute, adminRoute, getProductByCategory);
router.get("/:id/products",getProductByCategory);
// router.get("/:name", protectRoute, adminRoute, getCategoryByName);
router.get("/:name",getCategoryByName);
// router.post("/", protectRoute, adminRoute, createCategory);
router.post("/", createCategory);
// router.patch("/:id", protectRoute, adminRoute, updateCategory);
router.patch("/:id", updateCategory);
// router.delete("/:id", protectRoute, adminRoute, deleteCategory);
router.delete("/:id", deleteCategory);

export default router;