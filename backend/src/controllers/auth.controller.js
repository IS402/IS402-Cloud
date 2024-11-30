import { redis } from "../lib/redis.js";
import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

// Hàm sinh token
const generateTokens = (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m",
  });
  // console.log('accessToken', accessToken);

  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

// Hàm lưu refresh token vào Redis
const storeRefreshToken = async (userId, refreshToken) => {
	try {
		await redis.set(
		  `refresh_token:${userId}`,
		  refreshToken,
		  'EX',
		  7 * 24 * 60 * 60 // 7 days in seconds
		);
	  } catch (error) {
		console.error('Redis store error:', error);
		throw error;
	  }
   // 7 days
};

// Hàm thiết lập cookie
const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });
};

// Controller Đăng ký
export const signup = async (req, res) => {
  const { username, email, password, name } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ username, name, email, password });

    const { accessToken, refreshToken } = generateTokens(user._id);
    await storeRefreshToken(user._id, refreshToken);
    setCookies(res, accessToken, refreshToken);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    });
  } catch (error) {
    console.error("Error in signup controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller Đăng nhập
export const login = async (req, res) => {
  

  try {
	const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (await user.comparePassword(password)) {
      const { accessToken, refreshToken } = generateTokens(user);
      await storeRefreshToken(user._id, refreshToken);

      res.cookie('token', accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 15 * 60 * 1000 // 15 minutes
	  });

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
		token: accessToken
      });
    } else {
      res.status(400).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller Đăng xuất
export const logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (refreshToken) {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
      await redis.del(`refresh_token:${decoded.userId}`);
    }

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
  } catch (error) {
    console.error("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller Làm mới token
export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token provided" });
    }

    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const storedToken = await redis.get(`refresh_token:${decoded.userId}`);

    if (storedToken !== refreshToken) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const accessToken = jwt.sign({ userId: decoded.userId }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "15m",
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.json({ message: "Token refreshed successfully" });
  } catch (error) {
    console.error("Error in refreshToken controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Controller Kiểm tra trạng thái đăng nhập
export const checkLogin = async (req, res) => {
  try {
    const token = req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({ message: "No token found" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      email: user.email,
      name: user.name,
      role: user.role,
    });
  } catch (error) {
    console.error("Error in checkLogin controller:", error.message);
    res.status(401).json({ message: "Invalid token" });
  }
};

// Controller Lấy thông tin người dùng
export const getProfile = async (req, res) => {
  try {
    res.json(req.user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
