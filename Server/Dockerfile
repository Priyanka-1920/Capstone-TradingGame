FROM node:14-alpine

COPY . /backend

EXPOSE 5000

WORKDIR /backend

RUN npm install

ENV PORT=5000
ENV MONGODB_CONNECTION_STRING=mongodb+srv://<username><password>/tradinggame
ENV SECRET_KEY=dev-jwt-secret_key
ENV GOOGLE_CLIENT_ID=dummy_client_id
ENV GOOGLE_CLIENT_SECRET=dummy_client_secret
ENV GOOGLE_CALLBACK_URL=http://localhost:5000/auth/google/callback
ENV GMAIL=djain
ENV PASSWORD=123
ENV AWS_REGION=aws_region
ENV AWS_ACCESS_KEY_ID=AWS_ACCESS_KEY_ID
ENV AWS_SECRET_ACCESS_KEY=secret_access_key
ENV AWS_BUCKET_NAME=aws_bucket_name

CMD ["node","index.js"]