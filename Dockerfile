FROM node:18-alpine


WORKDIR /graha/Documents/PersonalProjects/ePortfolio

# Copy app package, json files, local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# RUN installs node packages or needed dependencies for next.js and what im doing
RUN npm install \
    && npm install -g serve \
    && npm run build \ 
    && rm -fr node_modules

#final configuration
EXPOSE 3000

# starts the app using serve command 
CMD ["serve", "-s", "build"]




