import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: Number,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    brand: { type: mongoose.Schema.Types.ObjectId, ref: 'Brand', required: true },
    images: [{ data: Buffer, contentType: String }], 
    stock: { type: Number, required: true },
    selected: {type: Boolean, default: false},
    specifications: [{
      key: String,
      value: String
    }],
    ratings: [{
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      rating: Number,
      review: String,
      date: { type: Date, default: Date.now }
    }],
    averageRating: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }    
  },{ timestamps: true });

  

  const Product = mongoose.model('Product', productSchema);

  export default Product;