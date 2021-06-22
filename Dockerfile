FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY . .

#COPY package*.json ./
#COPY *.config.js ./

RUN npm install


RUN npm run build

RUN npm install -g serve

CMD [ "serve", "-s", "build" ]

#CMD [ "npm", "start" ]