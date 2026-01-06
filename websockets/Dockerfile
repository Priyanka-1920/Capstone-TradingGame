FROM node

COPY . /socket

WORKDIR /socket

RUN npm install

EXPOSE 3007

ENV MONGODB_CONNECTION_STRING=mongodb+srv://deeps19nija_db_user:epDmXHFEVq2wmzDF@herovired-deepalicluste.l09w30m.mongodb.net/tradinggame


CMD ["node","stockWatch.js"]