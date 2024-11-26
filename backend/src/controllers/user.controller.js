import User from "../model/user.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find().sort({ name: 1 });
		res.json({ users });
	} catch (error) {
		console.log("Error in getAllUsers controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createUser = async (req, res) => {
    const { username, email, phoneNumber, password, name, role } = req.body;
	try {
	  const userExists = await User.findOne({ email });
  
	  if (userExists) {
		return res.status(400).json({ message: "User already exists" });
	  }
	  const user = await User.create({ username, name, email, password, phoneNumber, role});
      await redis.del("users");

    return res.status(201).json(user);
	} catch (error) {
	  console.log("Error in createUser controller", error.message);
	  res.status(500).json({ message: error.message });
	}
  };
  export const updateUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Brand not found" });
      }
  
      const { username, email, phoneNumber, password, name, role } = req.body;
  
  
      user.name = name;
      user.username = username;
      user.email=email;
      user.phoneNumber=phoneNumber;
      user.password=password;
      user.role=role;
  
      const updateUser = await user.save();
  
      await redis.del(`user:${req.params.id}`);
      await redis.del("users");
  
      res.json(updateUser);
    } catch (error) {
      console.log("Error in updateUser controller", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  
  export const deleteUser = async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      await redis.del(`user:${req.params.id}`);
      await redis.del("users");
  
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.log("Error in deleteUser controller", error.message);
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };