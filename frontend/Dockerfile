# Sets the base image of the application to the node’s official image.
FROM node:16

# Sets the Working Directory as "/App"
WORKDIR /App
# Copies the package.json file into "/App" and runs npm i
COPY package.json .
RUN npm install

COPY . .

# Specifies the port the node app will be running on
EXPOSE 3000

# Runs "npm start" after the above step is completed
CMD ["npm", "start"]