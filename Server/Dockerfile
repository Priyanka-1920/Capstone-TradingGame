FROM node:20

WORKDIR /backend

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the code
COPY . .

EXPOSE 3000

CMD ["node", "index.js"]