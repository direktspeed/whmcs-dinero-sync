FROM node:17@sha256:f90e576f924bd8250a5b17923e7879e93abac1991ad6053674aa1bbdcfd7a714
COPY . /app
WORKDIR /app
EXPOSE 3000
CMD node .
