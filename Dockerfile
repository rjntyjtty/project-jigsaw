FROM node:8.10.0-alpine

WORKDIR /jigsaw

ENV PATH /jigsaw/node_modules/.bin:$PATH

COPY package.json /package.json
COPY yarn.lock /yarn.lock

RUN yarn 
RUN yarn start


CMD ["yarn", "start"]
