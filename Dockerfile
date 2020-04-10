FROM node:8.10.0-alpine as build

WORKDIR /jigsaw

ENV PATH /jigsaw/node_modules/.bin:$PATH

COPY package.json /jigsaw/package.json
COPY yarn.lock /jigsaw/yarn.lock

RUN yarn

COPY . /jigsaw
RUN yarn build

CMD ["yarn", "start"]

# since we are working with a single docker container on a single heroku app, we are limited in our ability to run multiple processes
# vvv only works with static build files vvv

# nginx
# FROM nginx:1.16.0-alpine
# COPY --from=build /jigsaw/frontend/build /usr/share/nginx/html
# RUN rm /etc/nginx/conf.d/default.conf
# COPY ./frontend/nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE $PORT
# # https://ntotten.com/2018/07/22/nginx-on-heroku/
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
