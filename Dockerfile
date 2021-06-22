FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm run build

RUN npm install -g serve

COPY . .

CMD [ "serve", "-s", "build" ]

#CMD [ "npm", "start" ]