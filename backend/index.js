import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Product from './src/model/Product.js';
import Category from './src/model/Category.js';
import Brand from './src/model/Brand.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.post("/api/categories", async (req, res) => {
  const category = req.body;
  console.log(req.body);

  if (!category.name || !category.slug) {
    return res.status(400).send("Category details are missing");
  }

  const newCategory = new Category(category);

  try {
    await newCategory.save();
    res.status(201).json({ success: true, data: newCategory });
  } catch (error) {
    console.log("Error while saving category", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.use(express.json());
app.post("/api/brands", async (req, res) => {
  const brand = req.body;

  if (!brand.name) {
    return res.status(400).send("Brand details are missing");
  }

  const newBrand = new Brand(brand);

  try {
    await newBrand.save();
    res.status(201).json({ success: true, data: newBrand });
  } catch (error) {
    console.log("Error while saving brand", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.use(express.json());
app.post("/api/products", async (req, res) => {
  const productData = req.body;
  
  // Check for required fields
  if (!productData.name || !productData.brand || !productData.description || 
      !productData.price || !productData.category || !productData.stock) {
    return res.status(400).send("Product details are missing");
  }
  
  try {
    // Find Category by name
    const category = await Category.findOne({ name: productData.category });
    if (!category) {
      return res.status(400).send("Category not found");
    }
    
    // Find Brand by name
    const brand = await Brand.findOne({ name: productData.brand });
    if (!brand) {
      return res.status(400).send("Brand not found");
    }

    // Create new product with category and brand IDs
    const newProduct = new Product({
      name: productData.name,
      description: productData.description,
      price: productData.price,
      category: category._id,
      brand: brand._id,
      stock: productData.stock
    });

    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("Error while saving product", error.message);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling
const errorHandler = (err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
};

app.use(errorHandler);


// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});