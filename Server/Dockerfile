FROM node:18-alpine

COPY . /backend

EXPOSE 5000

WORKDIR /backend
RUN npm install

CMD ["node","index.js"]