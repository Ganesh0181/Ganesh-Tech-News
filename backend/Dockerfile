# Use the official Node.js base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your backend code
COPY . .

# Expose backend port (example: 5000)
EXPOSE 5000

# Start the server
CMD ["npm", "start"]