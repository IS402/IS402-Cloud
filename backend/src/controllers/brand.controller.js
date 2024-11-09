import Brand from "../model/brand.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllBrands = async (req, res) => {
  try {
    const brands = await Brand.find().sort({ name: 1 });
    res.json(brands);
  } catch (error) {
    console.log("Error in getAllBrands controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getBrandById = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }
    res.json(brand);
  } catch (error) {
    console.log("Error in getBrandById controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createBrand = async (req, res) => {
  try {
    const { name, description, image } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "brands" });
    }

    const brand = await Brand.create({
      name,
      description,
      image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
    });

    await redis.del("brands");

    res.status(201).json(brand);
  } catch (error) {
    console.log("Error in createBrand controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateBrand = async (req, res) => {
  try {
    const brand = await Brand.findById(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    const { name, description, image } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "brands" });
    }

    brand.name = name;
    brand.description = description;
    brand.image = cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : brand.image;

    const updatedBrand = await brand.save();

    await redis.del(`brand:${req.params.id}`);
    await redis.del("brands");

    res.json(updatedBrand);
  } catch (error) {
    console.log("Error in updateBrand controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteBrand = async (req, res) => {
  try {
    const brand = await Brand.findByIdAndDelete(req.params.id);
    if (!brand) {
      return res.status(404).json({ message: "Brand not found" });
    }

    if (brand.image) {
      const publicId = brand.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`brands/${publicId}`);
        console.log("deleted image from cloudinary");
      } catch (error) {
        console.log("error deleting image from cloudinary", error);
      }
    }

    await redis.del(`brand:${req.params.id}`);
    await redis.del("brands");

    res.json({ message: "Brand deleted successfully" });
  } catch (error) {
    console.log("Error in deleteBrand controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getBrandProducts = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.find({ brand: id });
    res.json(products);
  } catch (error) {
    console.log("Error in getBrandProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};