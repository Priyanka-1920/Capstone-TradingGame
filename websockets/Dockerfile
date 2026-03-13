FROM node

COPY . /socket

WORKDIR /socket

RUN npm install

EXPOSE 3007

ENV MONGODB_CONNECTION_STRING=mongodb+srv://<your_db_user>:<your_db_password>@<your_db_host>/tradinggame


CMD ["node","stockWatch.js"]