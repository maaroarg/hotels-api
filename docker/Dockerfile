FROM node:6.9

RUN apt-get update

RUN npm install --global nodemon

COPY . /usr/src/app/

WORKDIR /usr/src/app

RUN rm -rf node_modules/

RUN npm install

EXPOSE 3000

CMD npm run start
