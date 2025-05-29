FROM node as base

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY package-lock.json ./

RUN npm install


FROM base as build

COPY . .

RUN npm run build


FROM build as production

EXPOSE 3000

CMD ["next", "start"]
