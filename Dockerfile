FROM node:20
WORKDIR /var/www
COPY . .
RUN npm install
ENTRYPOINT npm start
EXPOSE 3000
