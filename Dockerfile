From node:8.9.0

WORKDIR /app

COPY package*.json  ./

RUN npm install

RUN npm install nodemon

RUN npm install babel-cli

RUN npm install babel-preset-env
 
EXPOSE 3007              

COPY . /app

CMD npm run start
