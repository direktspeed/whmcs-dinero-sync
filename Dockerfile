FROM node
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD node .
