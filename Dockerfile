FROM node:10-alpine

WORKDIR /srv

ENV NODE_ENV=production

COPY package.json yarn.lock ./

RUN apk add --no-cache git \
    && yarn install --production --frozen-lockfile \
    && yarn cache clean \
    && apk del git

COPY . .

ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", "-r", "esm", "server/index.js"]
