FROM node:16.14.2-alpine

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY package.json /usr/src/nuxt-app/package.json
RUN npm install

COPY . /usr/src/nuxt-app/

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]