import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  logo: { type: String },
  description: { type: String },
  website: { type: String },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }]
});

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;