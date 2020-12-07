FROM node:15-buster-slim  as base

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install


COPY . .

USER node

EXPOSE 3000
EXPOSE 3001

ENV NODE_ENV production

CMD [ "npm", "start" ]
