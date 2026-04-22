# Use official Node.js image
FROM 17

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose port (change if your app uses a different one)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
