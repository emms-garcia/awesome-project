FROM node:latest

RUN mkdir -p /tmp
ADD package.json /tmp/package.json
RUN npm config set registry https://registry.npmjs.org/
RUN npm install -g webpack
RUN cd /tmp && npm install
RUN mkdir -p /code && cp -a /tmp/node_modules /code

WORKDIR /code
ADD . /code
