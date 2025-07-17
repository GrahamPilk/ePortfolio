FROM node:18-alpine

WORKDIR /graha/Documents/PersonalProjects/ePortfolio/src/app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY ./src ./src

# Build the application
RUN npm run build

# Install serve globally
RUN npm install -g serve

# Remove node_modules to reduce image size (only for production)
RUN rm -rf node_modules

EXPOSE 3000

# Serve the built application
CMD ["serve", "-s", "out", "-l", "3000"]