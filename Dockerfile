FROM node:18-alpine

RUN apk add --no-cache bash

USER node

EXPOSE 5173

WORKDIR /appPepITPortugal