import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: String,
    slug: { type: String, required: true, unique: true },
    image: String,
    status: { type: String, enum: ['active', 'inactive'], default: 'active' }
  });

 const Category = mongoose.model('Category', categorySchema);

 export default Category;