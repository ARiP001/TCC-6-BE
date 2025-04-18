FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 7000
CMD ["node", "index.js"]