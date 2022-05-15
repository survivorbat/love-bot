FROM node as builder

# Could be split up in 2 build stages, 1 for dependencies and 1 for compilation

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN npm run compile

FROM astefanutti/scratch-node

COPY --from=builder /app/ /

ENTRYPOINT ["node", "/dist/index.js"]
