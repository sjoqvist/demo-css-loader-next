FROM node:16.1.0-buster-slim
WORKDIR /usr/src/web
RUN apt-get update && apt-get install --yes file && rm -rf /var/lib/apt/lists/*
COPY package*.json ./
RUN npm ci
COPY main.js webpack.config.js ./
RUN $(yarn bin)/webpack --mode development
CMD set -x && head -9 build/css/* && file build/*.* build/fonts/*
