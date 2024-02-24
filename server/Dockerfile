FROM node:lts

COPY ./src ./src
COPY .babelrc package-lock.json package.json tsconfig.json ./

RUN npm ci
RUN npm run build:js

EXPOSE 4433
ENTRYPOINT ["node", "./dist/index.js"]
