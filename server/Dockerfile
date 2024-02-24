FROM node:lts

COPY ./server/src /server/src
COPY ./server/package.json ./server/tsconfig.json /server/

COPY ./shared/src /shared/src
COPY ./shared/package.json ./shared/tsconfig.json /shared/

COPY ./package.json ./yarn.lock /

RUN yarn install --frozen-lockfile

WORKDIR /server
RUN yarn run build

EXPOSE 4433
ENTRYPOINT ["node", "/server/dist/index.js"]
