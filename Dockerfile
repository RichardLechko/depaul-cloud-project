# Use the official Node.js image as the base image
FROM node:18-alpine AS base

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for the production stage
FROM node:18-alpine AS production

# Set the working directory inside the production container
WORKDIR /app

# Copy only the build artifacts and dependencies from the previous stage
COPY --from=base /app ./

# Expose the port the app runs on
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
