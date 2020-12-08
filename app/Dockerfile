FROM node:15-buster-slim  as base
RUN apt update && apt install -qqy curl 
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

USER node

EXPOSE 3000
EXPOSE 3001

ENV NODE_ENV production

CMD [ "npm", "start" ]
