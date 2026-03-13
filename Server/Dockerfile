FROM node:14-alpine

COPY . /backend

EXPOSE 5000

WORKDIR /backend

RUN npm install

ENV PORT=5000
ENV MONGODB_CONNECTION_STRING=mongodb+srv://<your_db_user>:<your_db_password>@<your_db_host>/tradinggame
ENV SECRET_KEY=dev-jwt-secret_key
ENV GOOGLE_CLIENT_ID=<google_client_id>
ENV GOOGLE_CLIENT_SECRET=<google_client_secret>
ENV GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
ENV GMAIL=deeps19nija@gmail.com
ENV PASSWORD=<password>
ENV AWS_REGION=eu-west-2
ENV AWS_ACCESS_KEY_ID=<your_aws_access_key_id>
ENV AWS_SECRET_ACCESS_KEY=<your_aws_secret_access_key>
ENV AWS_BUCKET_NAME=tradinggame-capstone

CMD ["node","index.js"]