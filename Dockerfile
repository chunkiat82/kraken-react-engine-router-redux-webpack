FROM node:0.10

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

EXPOSE 8001
CMD [ "npm", "start"]
