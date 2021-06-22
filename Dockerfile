FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

COPY build .

RUN npm install -g serve

CMD [ "serve", "-s", "build" ]

#CMD [ "npm", "start" ]