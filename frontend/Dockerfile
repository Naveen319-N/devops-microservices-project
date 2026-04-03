FROM node:18 AS build
WORKDIR /app

COPY package*.json ./

RUN npm config set registry https://registry.npmjs.org/ \
 && npm config set fetch-retries 5 \
 && npm config set fetch-retry-maxtimeout 600000 \
 && npm config set maxsockets 1 \
 && npm install --legacy-peer-deps

COPY . .

RUN NODE_OPTIONS="--max-old-space-size=512" npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80