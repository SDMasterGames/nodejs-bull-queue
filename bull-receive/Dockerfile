FROM node:16.15.1

WORKDIR /bull-receive/

COPY package.json yarn.lock ./

RUN yarn

COPY . ./

EXPOSE 9090

##RUN yarn start