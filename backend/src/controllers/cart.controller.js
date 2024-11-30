import Product from "../model/product.model.js";

export const getCartProducts = async (req, res) => {
	try {
		const products = await Product.find({ _id: { $in: req.user.cartItems } });

		// add quantity for each product
		const cartItems = products.map((product) => {
			const item = req.user.cartItems.find((cartItem) => cartItem.id === product.id);
			return { ...product.toJSON(), quantity: item.quantity };
		});

		res.json(cartItems);
	} catch (error) {
		console.log("Error in getCartProducts controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const addToCart = async (req, res) => {
	try {
	  const { productId } = req.body; // Extract the productId from the request body
	  const user = req.user; // Retrieve the authenticated user from the request
  
	  if (!productId) {
		return res.status(400).json({ message: "Product ID is required" });
	  }
  
	  // Ensure the user has either "user" or "admin" role
	  if (!["user", "admin"].includes(user.role)) {
		return res.status(403).json({ message: "Access denied" });
	  }
  
	  // Check if the product already exists in the cart
	  const existingItem = user.cartItems.find(
		(item) => item.productId.toString() === productId
	  );
  
	  if (existingItem) {
		// If the product exists, increment the quantity
		existingItem.quantity += 1;
	  } else {
		// Otherwise, add the product to the cart with a default quantity of 1
		user.cartItems.push({ productId, quantity: 1 });
	  }
  
	  // Save the user's updated cart to the database
	  await user.save();
  
	  res.status(200).json({ cartItems: user.cartItems });
	} catch (error) {
	  console.error("Error in addToCart controller:", error.message);
	  res.status(500).json({ message: "Server error", error: error.message });
	}
  };
  
  

export const removeAllFromCart = async (req, res) => {
	try {
		const { productId } = req.body;
		const user = req.user;
		if (!productId) {
			user.cartItems = [];
		} else {
			user.cartItems = user.cartItems.filter((item) => item.id !== productId);
		}
		await user.save();
		res.json(user.cartItems);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const updateQuantity = async (req, res) => {
	try {
		const { id: productId } = req.params;
		const { quantity } = req.body;
		const user = req.user;
		const existingItem = user.cartItems.find((item) => item.id === productId);

		if (existingItem) {
			if (quantity === 0) {
				user.cartItems = user.cartItems.filter((item) => item.id !== productId);
				await user.save();
				return res.json(user.cartItems);
			}

			existingItem.quantity = quantity;
			await user.save();
			res.json(user.cartItems);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	} catch (error) {
		console.log("Error in updateQuantity controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};