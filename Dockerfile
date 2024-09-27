FROM node:lts-alpine


WORKDIR /usr/src
COPY . .
EXPOSE 3000
RUN yarn install
RUN yarn run build
CMD ["yarn", "start"]
