FROM node:16-alpine3.15

RUN mkdir -p /usr/src/web
WORKDIR /usr/src/web

COPY package*.json ./

RUN npm install -g npm@8.5.5  && \
	npm install -g @vue/cli
RUN npm install

COPY . .

CMD ["npm", "run", "serve"]
