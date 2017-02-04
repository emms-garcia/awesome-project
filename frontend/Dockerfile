FROM node:latest

RUN mkdir /install
ADD package.json /install/package.json
RUN npm config set registry https://registry.npmjs.org/
RUN npm install -g webpack
RUN cd /install && npm install
RUN mkdir -p /code && cp -a /install/node_modules /code

WORKDIR /code
ADD . /code
