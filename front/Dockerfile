FROM node:16

WORKDIR /app-front

COPY package.json ./

RUN npm install

COPY . .

ENTRYPOINT [ "npm" ]
CMD ["start"]