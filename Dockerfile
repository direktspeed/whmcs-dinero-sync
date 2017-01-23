FROM node:7
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD node .
