#Stage 1 : build
FROM node:22-alpine AS builder
WORKDIR /app 
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build 

#Stage 2 : Production
FROM node:22-alpine
WORKDIR /app

# Copy only necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next

EXPOSE 3000

CMD ["npm","start"]