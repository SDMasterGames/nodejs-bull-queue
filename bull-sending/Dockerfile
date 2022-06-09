FROM node:16.15.1

WORKDIR /bull-sending/

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 8080

##RUN yarn start