import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, default: 1 },
      price: { type: Number, required: true }, // Store the product's price at the time of addition
    },
  ],
  totalAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Pre-save hook to calculate totalAmount before saving the cart
cartSchema.pre('save', function (next) {
  this.totalAmount = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  next();
});

// Pre-update hook for `findOneAndUpdate` or similar operations
cartSchema.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update && update.items) {
    const cart = await this.model.findOne(this.getQuery());
    const newItems = update.items;
    const totalAmount = newItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    update.totalAmount = totalAmount;
  }
  next();
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
