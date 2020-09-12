FROM node:carbon

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm -v
RUN node -v

COPY package.json /usr/src/app/
COPY package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app

EXPOSE 8081

ENV NODE_ENV production
ENV PORT 8081
ENV PUBLIC_PATH "/"

RUN npm run start

# Main command
CMD [ "npm", "run", "start" ]
