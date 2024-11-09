import express from "express";
import {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
  getBrandProducts,
} from "../controllers/brand.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllBrands);
router.get("/:id", protectRoute, adminRoute, getBrandById);
router.post("/", protectRoute, adminRoute, createBrand);
router.patch("/:id", protectRoute, adminRoute, updateBrand);
router.delete("/:id", protectRoute, adminRoute, deleteBrand);
router.get("/:id/products", protectRoute, adminRoute, getBrandProducts);

export default router;