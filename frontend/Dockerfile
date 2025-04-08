# Use Node.js image for development
FROM node:18 AS development

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 (default for React development server)
EXPOSE 3000

# Run the React development server, binding it to 0.0.0.0 so it is accessible from your local machine
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
