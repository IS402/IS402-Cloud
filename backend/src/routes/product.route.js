import express from "express";
import {
	createProduct,
	deleteProduct,
	getAllProducts,
	getFeaturedProducts,
    getProductsByBrand,
	getRecommendedProducts,
	toggleFeaturedProduct,
} from "../controllers/product.controller.js";
import { adminRoute, protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/", protectRoute, adminRoute, getAllProducts);
router.get("/",getAllProducts);
router.get("/featured", getFeaturedProducts);
router.get("/brand/:brand", getProductsByBrand);
router.get("/recommendations", getRecommendedProducts);
//router.post("/", protectRoute, adminRoute, createProduct);
router.post("/", createProduct);
// router.patch("/:id", protectRoute, adminRoute, toggleFeaturedProduct);
router.patch("/:id",toggleFeaturedProduct);
// router.delete("/:id", protectRoute, adminRoute, deleteProduct);
router.delete("/:id",deleteProduct);

export default router;