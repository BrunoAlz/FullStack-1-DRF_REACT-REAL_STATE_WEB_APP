ARG NODE_VERSION=19-alpine

FROM node:${NODE_VERSION} as node

FROM node as frontend-local-build

ARG APP_HOME=/app

WORKDIR ${APP_HOME}

COPY ./package*.json .

RUN npm install

COPY . ${APP_HOME}

CMD ["npm","start"]