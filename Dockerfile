FROM node:18-alpine


WORKDIR <directory>

# Copy app package, json files, local directories to the current local directory of our docker image (/app)
COPY ./src ./src
COPY ./public ./public

# RUN installs node packages or needed dependencies for next.js and what im doing
RUN npm install 

#final configuration
EXPOSE 3000

# starts the app using serve command 
CMD ["serve", "-s", "build"]




