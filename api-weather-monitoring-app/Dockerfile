FROM node

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY package-lock.json ./


RUN npm install

COPY . .

RUN npm run build

ENV TOKEN_SECRET="KuJcCQ0is27L/z926N9bzAdoKtkMBhkHxvR84wPBW8Q="
ENV DATABASE_URL="postgresql://postgres:postgres@localhost:5432/weather_db?schema=public"
ENV PORT="3000"
ENV NODE_ENV="production"

EXPOSE 3000

CMD ["node", "dist/main.js"]
