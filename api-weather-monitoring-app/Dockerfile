FROM node

WORKDIR /app

COPY package.json ./

COPY yarn.lock ./

COPY package-lock.json ./


RUN npm install

COPY . .

RUN npm run build

ENV TOKEN_SECRET="KuJcCQ0is27L/z926N9bzAdoKtkMBhkHxvR84wPBW8Q="
ENV DATABASE_URL="postgresql://admin:QSBmMUKLXkvago5l2mPouvn7m38CiJxw@dpg-csftv13v2p9s73fjjvc0-a.oregon-postgres.render.com/weather_db_ipjo?schema=public"
ENV PORT="3000"
ENV NODE_ENV="production"

RUN npx prisma generate

EXPOSE 3000

CMD ["node", "dist/main.js"]