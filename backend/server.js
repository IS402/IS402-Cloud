import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from "cookie-parser";
import path from "path";
import cloudinary from './src/lib/cloudinary.js';

// Import routes and database connection
import authRoutes from "./src/routes/auth.route.js";
import productRoutes from './src/routes/product.route.js';
import cartRoutes from './src/routes/cart.route.js';
import categoryRoutes from './src/routes/category.route.js';
import brandRoutes from './src/routes/brand.route.js';
import userRoutes from './src/routes/user.route.js'
import { connectDB } from "./src/lib/db.js";

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware

 // Body parser
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

// Configure CORS to allow requests from the frontend server
app.use(cors({
  origin: 'http://localhost:3000', // Frontend URL
  credentials: true,              // Allow cookies to be sent with requests
}));

// Define routes
app.use("/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/category", categoryRoutes);
app.use("/api/brand", brandRoutes);
app.use("/api/user", userRoutes);



app.get('/api/images/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found');

    const images = product.images.map((img) => ({
      data: img.data.toString('base64'), // Convert Buffer back to base64
      contentType: img.contentType,
    }));

    res.json(images);
  } catch (error) {
    console.error('Error fetching images:', error.message);
    res.status(500).json({ message: 'Failed to fetch images' });
  }
});


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server and connect to the database
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectDB();
});
