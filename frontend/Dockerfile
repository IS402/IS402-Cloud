# Use the Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy the entire source code into the container
COPY . .

# Set environment variables for React (e.g., OpenSSL compatibility)
ENV NODE_OPTIONS=--openssl-legacy-provider

# Expose the React development server port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
