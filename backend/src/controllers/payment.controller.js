import Order from "../models/order.model.js";
import Cart from "../models/cart.model.js";

export const createOrder = async (req, res) => {
  try {
    const { shippingAddress, paymentMethod, specialNote } = req.body; // Retrieve data from request body
    const userId = req.user._id; // Get user ID from the authenticated user

    // Fetch the user's cart
    const cart = await Cart.findOne({ user: userId }).populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Your cart is empty" });
    }

    // Prepare order items
    const orderItems = cart.items.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
      price: item.product.price,
      total: item.quantity * item.product.price,
    }));

    // Calculate the total amount
    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.total,
      0
    );

    // Create a new order
    const newOrder = new Order({
      user: userId,
      items: orderItems,
      totalAmount,
      shippingAddress,
      paymentMethod,
      orderStatus: "processing",
      specialNote, // Add any extra notes from the user
    });

    // Save the order to the database
    await newOrder.save();

    // Clear the user's cart after creating the order
    cart.items = [];
    cart.totalAmount = 0;
    await cart.save();

    res.status(201).json({
      message: "Order placed successfully",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).json({
      message: "An error occurred while placing the order",
      error: error.message,
    });
  }
};

export const getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate("items.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error fetching order details:", error.message);
    res.status(500).json({
      message: "An error occurred while fetching order details",
      error: error.message,
    });
  }
};
