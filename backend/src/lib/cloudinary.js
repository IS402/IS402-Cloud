import { v2 as cloudinary } from "cloudinary";
import dotenv from 'dotenv';
dotenv.config();

// Load environment variables


// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Check the config and confirm the values
console.log("Cloudinary Config:", {
	cloud_name: cloudinary.config().cloud_name,
	api_key: cloudinary.config().api_key ? "Loaded" : "Not Loaded",
	api_secret: cloudinary.config().api_secret ? "Loaded" : "Not Loaded",
});

// Validate configuration
if (
	!process.env.CLOUDINARY_CLOUD_NAME ||
	!process.env.CLOUDINARY_API_KEY ||
	!process.env.CLOUDINARY_API_SECRET
) {
	throw new Error(
		"Missing required Cloudinary configuration. Ensure all .env variables are set correctly."
	);
}

// Example of a properly signed upload
try {
	const timestamp = Math.floor(new Date().getTime() / 1000); // Current UNIX timestamp
	const signature = cloudinary.utils.api_sign_request(
		{ timestamp },
		process.env.CLOUDINARY_API_SECRET
	);

	console.log("Generated Signature:", signature);
	
	
	
} catch (err) {
	console.error("Error during signature generation or upload:", err);
}

export default cloudinary;
