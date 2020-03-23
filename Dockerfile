FROM node:8.10.0-alpine as build

WORKDIR /jigsaw

ENV PATH /jigsaw/node_modules/.bin:$PATH

COPY package.json /jigsaw/package.json
COPY yarn.lock /jigsaw/yarn.lock

RUN yarn

COPY . /jigsaw
RUN yarn build

CMD ["yarn", "start"]

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /jigsaw/frontend/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY frontend/nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
