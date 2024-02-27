FROM node:lts

COPY ./server/src /server/src
COPY ./server/package.json ./server/tsconfig.json /server/

COPY ./shared/src /shared/src
COPY ./shared/package.json ./shared/tsconfig.json /shared/

COPY ./data/src /data/src
COPY ./data/package.json ./data/tsconfig.json /data/

COPY ./package.json ./yarn.lock /

RUN yarn install --frozen-lockfile

# We have to do this manually to output data.ts
WORKDIR /data
RUN yarn export-songs

# We have to recompile because now data.ts will have changed
WORKDIR /shared
RUN yarn build

WORKDIR /server
RUN yarn build

EXPOSE 4433
ENTRYPOINT ["node", "/server/dist/index.js"]
