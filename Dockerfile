# pull from node 16 image
FROM node:16

# set the working directory
WORKDIR /live-ideas

# add to path
ENV PATH /node_modules/.bin:$PATH

# install app dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

# add the app
COPY . .

# start it
CMD ["npm", "run", "dev"]

# docker run -itd --rm -v ${PWD}:/book-finder -v /book-finder/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true sample:dev