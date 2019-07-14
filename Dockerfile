FROM node:10.16-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

EXPOSE 80

ENTRYPOINT ["npm", "run"]

CMD ["start"]
