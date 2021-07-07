FROM node:12

# Create app directory
WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

RUN npm install -g serve

CMD [ "serve", "-s", "build" ]