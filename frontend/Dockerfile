FROM node:18 AS build
WORKDIR /app

# Copy package files
COPY package*.json ./

# 🔥 Stable install (IMPORTANT)
RUN npm config set registry https://registry.npmjs.org/ \
 && npm config set fetch-retries 5 \
 && npm config set fetch-retry-maxtimeout 600000 \
 && npm config set maxsockets 1 \
 && npm ci

# Copy source
COPY . .

# 🔥 Build with memory limit
RUN NODE_OPTIONS="--max-old-space-size=512" npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80