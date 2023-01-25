FROM node:18-alpine as build-image
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig.json ./
COPY ./src ./src
RUN npm i
RUN npx tsc

FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY --from=build-image ./usr/src/app/dist ./dist
RUN npm i --production
COPY . .
EXPOSE 8080
CMD [ "yarn", "ts-node-dev --inspect --transpile-only --ignore-watch node_modules --respawn src/index" ]
