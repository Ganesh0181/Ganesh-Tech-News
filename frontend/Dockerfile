FROM node:18-alpine

WORKDIR /app

# Install dependencies first (cached)
COPY package.json package-lock.json ./
RUN npm install

# Copy source
COPY . .

# Fix Tailwind build issue:
RUN npx tailwindcss -i ./src/index.css -o ./src/tailwind.css --minify || true

# Build React App
RUN npm run build

# Serve using nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
