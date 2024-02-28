FROM node:lts

COPY ./server /server
COPY ./data /data
COPY ./data-exporter /data-exporter
COPY ./shared /shared
COPY ./package.json ./yarn.lock /

RUN yarn install --frozen-lockfile

WORKDIR /server
RUN yarn build

EXPOSE 4433
ENTRYPOINT ["node", "/server/dist/index.js"]
