FROM node:18@sha256:e5b7b349d517159246070bf14242027a9e220ffa8bd98a67ba1495d969c06c01
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD node .
