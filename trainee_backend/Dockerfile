FROM node

WORKDIR /app/src

COPY package.json .

COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
