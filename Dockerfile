FROM node:8.10.0-alpine

WORKDIR /jigsaw

ENV PATH /jigsaw/node_modules/.bin:$PATH

COPY package.json /jigsaw/package.json
COPY yarn.lock /jigsaw/yarn.lock

RUN yarn

CMD ["yarn", "start"]
