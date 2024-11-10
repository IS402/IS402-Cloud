import express from "express";
import { login, logout, signup, refreshToken, getProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh-token", refreshToken);
router.get("/profile", protectRoute, getProfile);
router.get("/profile", protectRoute, getProfile);
router.get('/check-login', protectRoute, (req, res) => {
    // Trả về thông tin người dùng khi đã xác thực
    res.json({
      email: req.user.email,  // Email của người dùng
    });
  });

export default router;