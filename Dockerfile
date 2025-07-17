FROM node:18-alpine

WORKDIR /graha/Documents/PersonalProjects/ePortfolio/src/app

# Copy app package, json files, local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY package.json package-lock.json ./

# RUN installs node packages or needed dependencies for next.js and what im doing
RUN npm install 

# Final configuration
EXPOSE 3000

# Starts the app using serve command
CMD ["npm", "run", "dev"]