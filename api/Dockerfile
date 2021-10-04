FROM node:14

ARG port

WORKDIR /app

COPY . /app 

RUN yarn

EXPOSE $port 

CMD ["yarn","dev"]