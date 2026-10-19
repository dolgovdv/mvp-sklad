FROM node:20-alpine

# Устанавливаем openssl для Prisma
RUN apk add --no-cache openssl libc6-compat

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3001

# Используем npx prisma db push для MVP вместо тяжелого migrate dev, чтобы не блокировать поток
CMD npx prisma db push && npm run start:dev
