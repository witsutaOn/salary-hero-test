FROM node:alpine

EXPOSE 3001

WORKDIR /

RUN npm install i npm@latest -g

COPY package.json package-lock*.json ./

RUN npm install

COPY . .

CMD ["node", "app/index.js"]