FROM node:current-alpine

RUN mkdir -p /usr/src/backend-api && chown -R node:node /usr/src/backend-api
WORKDIR /usr/src/backend-api

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/backend-api/
RUN npm install

COPY --chown=node:node . .

EXPOSE 8000

CMD ["npm", "start"]