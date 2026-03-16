FROM node:18-alpine

COPY . /socket

WORKDIR /socket

RUN npm install

EXPOSE 3007

CMD ["node","stockWatch.js"]