FROM node:7@sha256:af5c2c6ac8bc3fa372ac031ef60c45a285eeba7bce9ee9ed66dad3a01e29ab8d
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD node .
