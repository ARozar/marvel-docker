FROM 'mhart/alpine-node'

COPY package.json .

COPY .babelrc .

RUN npm install

COPY ./src ./src

RUN npm run build

RUN rm -rf ./src

EXPOSE 3002

CMD [ "npm", "run", "start:prod" ]