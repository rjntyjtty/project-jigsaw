FROM node:8.10.0-alpine

WORKDIR /jigsaw-frontend

ENV PATH /jigsaw-frontend/node_modules/.bin:$PATH

COPY package.json /jigsaw-frontend/package.json
COPY yarn.lock /jigsaw-frontend/yarn.lock

RUN yarn

CMD ["yarn", "start"]
