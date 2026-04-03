FROM node:18 AS build
WORKDIR /app

# Copy only package files first (for caching)
COPY package*.json ./

# 🔥 Fix: stable npm install
RUN npm config set registry https://registry.npmjs.org/ \
 && npm config set fetch-retries 5 \
 && npm config set fetch-retry-maxtimeout 600000 \
 && npm install

# Copy rest of code
COPY . .

# Build app
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80