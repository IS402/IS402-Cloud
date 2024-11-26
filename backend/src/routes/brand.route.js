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

// router.get("/", protectRoute, adminRoute, getAllBrands);
router.get("/", getAllBrands);
// router.get("/:id", protectRoute, adminRoute, getBrandById);
router.get("/:id",getBrandById);
// router.post("/", protectRoute, adminRoute, createBrand);
router.post("/", createBrand);
// router.patch("/:id", protectRoute, adminRoute, updateBrand);
router.patch("/:id", updateBrand);
// router.delete("/:id", protectRoute, adminRoute, deleteBrand);
router.delete("/:id",deleteBrand);
// router.get("/:id/products", protectRoute, adminRoute, getBrandProducts);
router.get("/:id/products",getBrandProducts);

export default router;