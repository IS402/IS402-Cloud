import Category from "../model/category.model.js";
import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";

export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().exec();
    if (!categories) {
      return res.status(404).json({ message: 'No categories found' });
    }
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching categories' });
  }
};
export const getCategoryByName = async (req, res) => {
  const categoryName = req.params.name;
  try {
    const category = await Category.findOne({ name: { $regex: categoryName, $options: 'i' } }).exec();
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching category' });
  }
};
export const getProductByCategory = async (req, res) => {
  const categoryId = req.params.categoryId;
  try {
    const category = await Category.findById(categoryId).exec();
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    const products = await Product.find({ category: category._id })
      .populate('category')
      .exec();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};
export const createCategory = async (req, res) => {
  try {
    const { name, description,slug, image } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "categories" });
    }

    const category = await Category.create({
      name,
      description,
      slug,
      image: cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : "",
    });

    await redis.del("categories");

    return res.status(201).json(category);
  } catch (error) {
    console.log("Error in createCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const { name, description, slug, image } = req.body;

    let cloudinaryResponse = null;

    if (image) {
      cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "categories" });
    }

    category.name = name;
    category.description = description;
    category.slug=slug;
    category.image = cloudinaryResponse?.secure_url ? cloudinaryResponse.secure_url : category.image;

    const updatedCategory = await category.save();

    await redis.del(`category:${req.params.id}`);
    await redis.del("categories");

    return res.json(updatedCategory);
  } catch (error) {
    console.log("Error in updateCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    if (category.image) {
      const publicId = category.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`categories/${publicId}`);
        console.log("deleted image from cloudinary");
      } catch (error) {
        console.log("error deleting image from cloudinary", error);
      }
    }

    await redis.del(`category:${req.params.id}`);
    await redis.del("categories");

    return res.json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log("Error in deleteCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};