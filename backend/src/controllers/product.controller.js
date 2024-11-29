import { redis } from "../lib/redis.js";
import cloudinary from "../lib/cloudinary.js";
import Product from "../model/product.model.js";
import Category from "../model/category.model.js";
import Brand from "../model/brand.model.js";
import dotenv from 'dotenv';
import isBase64 from 'is-base64';



dotenv.config();


export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("category")
      .populate("brand")
      .sort({ name: 1 });

    // Chuyển đổi Buffer thành base64
    const processedProducts = products.map((product) => {
      const images = product.images.map((img) => {
        return `data:${img.contentType};base64,${img.data.toString("base64")}`;
      });
      return { ...product._doc, images }; // Trả sản phẩm kèm hình ảnh đã chuyển đổi
    });

    res.json({ products: processedProducts });
  } catch (error) {
    console.error("Error in getAllProducts controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    const images = product.images.map((img) => {
      return `data:${img.contentType};base64,${img.data.toString("base64")}`;
    });
    const processedProducts = [{ ...product._doc, images }];
    res.json({ products: processedProducts });
  } catch (error) {
    console.error("Error in getAllProducts controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getFeaturedProducts = async (req, res) => {
  try {
    let featuredProducts = await redis.get("featured_products");
    if (featuredProducts) {
      return res.json(JSON.parse(featuredProducts));
    }

    // if not in redis, fetch from mongodb
    // .lean() is gonna return a plain javascript object instead of a mongodb document
    // which is good for performance
    featuredProducts = await Product.find({ isFeatured: true }).lean();

    if (!featuredProducts) {
      return res.status(404).json({ message: "No featured products found" });
    }

    // store in redis for future quick access

    await redis.set("featured_products", JSON.stringify(featuredProducts));

    res.json(featuredProducts);
  } catch (error) {
    console.log("Error in getFeaturedProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price, discountPrice, images, category, stock, brand } = req.body;

    // Kiểm tra dữ liệu đầu vào
    if (!name || !description || !price || !discountPrice || !category || !stock || !brand || !images.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!images.every((img) => isBase64(img, { mimeRequired: true }))) {
      return res.status(400).json({ message: 'Invalid image format' });
    }

    const processedImages = images.map((image) => ({
      data: Buffer.from(image.split(',')[1], 'base64'), // Convert base64 string to Buffer
      contentType: image.split(';')[0].split(':')[1], // Extract content type (e.g., "image/jpeg")
    }));
    console.log("Received Images:", processedImages);
    

    // Tạo sản phẩm mới
    const product = await Product.create({
      name,
      description,
      price,
      discountPrice,
      images: processedImages, // Lưu mảng URL ảnh vào MongoDB
      category,
      stock,
      brand,
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Error in createProduct controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, discountPrice, images, category, stock, brand } = req.body;

    if (!name || !description || !price || !discountPrice || !category || !stock || !brand || !images.length) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    if (!images.every((img) => isBase64(img, { mimeRequired: true }))) {
      return res.status(400).json({ message: 'Invalid image format' });
    }

    const processedImages = images.map((image) => ({
      data: Buffer.from(image.split(',')[1], 'base64'),
      contentType: image.split(';')[0].split(':')[1],
    }));
    console.log("Processed Images:", processedImages);

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        discountPrice,
        images: processedImages,
        category,
        stock,
        brand,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error("Error in editProduct controller:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    if (product.image) {
      const publicId = product.image.split("/").pop().split(".")[0];
      try {
        await cloudinary.uploader.destroy(`products/${publicId}`);
        console.log("deleted image from cloduinary");
      } catch (error) {
        console.log("error deleting image from cloduinary", error);
      }
    }

    await Product.findByIdAndDelete(req.params.id);

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.log("Error in deleteProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getRecommendedProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $sample: { size: 4 },
      },
      {
        $project: {
          _id: 1,
          name: 1,
          description: 1,
          image: 1,
          price: 1,
        },
      },
    ]);

    res.json(products);
  } catch (error) {
    console.log("Error in getRecommendedProducts controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryDoc = await Category.findOne({ name: category });
    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products = await Product.find({ category: categoryDoc._id });

    const processedProducts = products.map((product) => {
      const images = product.images.map((img) => {
        return `data:${img.contentType};base64,${img.data.toString("base64")}`;
      });
      return { ...product._doc, images };
    });

    res.json({ products: processedProducts });
  } catch (error) {
    console.log("Error in getProductsByCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByCategorySlug = async (req, res) => {
  const { category } = req.params;
  try {
    const categoryDoc = await Category.findOne({ slug: category });
    if (!categoryDoc) {
      return res.status(404).json({ message: "Category not found" });
    }
    const products = await Product.find({ category: categoryDoc._id })
    .populate("category")
    .populate("brand");

    const processedProducts = products.map((product) => {
      const images = product.images.map((img) => {
        return `data:${img.contentType};base64,${img.data.toString("base64")}`;
      });
      return { ...product._doc, images };
    });

    res.json({ products: processedProducts });
  } catch (error) {
    console.log("Error in getProductsByCategory controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getProductsByBrand = async (req, res) => {
  const { brand } = req.params;
  try {
    const products = await Product.find({ brand });
    res.json({ products });
  } catch (error) {
    console.log("Error in getProductsByBrand controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const toggleFeaturedProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      product.isFeatured = !product.isFeatured;
      const updatedProduct = await product.save();
      await updateFeaturedProductsCache();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.log("Error in toggleFeaturedProduct controller", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

async function updateFeaturedProductsCache() {
  try {
    // The lean() method  is used to return plain JavaScript objects instead of full Mongoose documents. This can significantly improve performance

    const featuredProducts = await Product.find({ isFeatured: true }).lean();
    await redis.set("featured_products", JSON.stringify(featuredProducts));
  } catch (error) {
    console.log("error in update cache function");
  }
}
