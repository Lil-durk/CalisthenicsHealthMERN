# Sets the base image of the application to the node’s official image.
FROM node:16

# Sets the Working Directory as "/index"
WORKDIR /index
# Copies the package.json file into "/index" and runs npm i
COPY ./ /index
RUN npm install

COPY . .

# Specifies the port the node app will be running on
EXPOSE 3003

# Runs "npm start" after the above step is completed
CMD ["npm", "start"]