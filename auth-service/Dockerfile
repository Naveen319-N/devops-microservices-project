FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ \
 && npm config set fetch-retries 5 \
 && npm config set fetch-retry-maxtimeout 600000 \
 && npm install

COPY . .

FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app .
EXPOSE 3001
CMD ["node", "app.js"]