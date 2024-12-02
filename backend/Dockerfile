# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt dependencies
RUN npm install

# Copy toàn bộ mã nguồn backend vào container
COPY . .

# Copy file .env vào container
COPY .env .env

# Expose port
EXPOSE 5000

# Start server
CMD ["npm", "start"]
