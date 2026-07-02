# Используем официальный образ Node.js
FROM node:20-alpine

# Создаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json (если есть)
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Генерируем Prisma Client (нужно, чтобы код видел модели)
RUN npx prisma generate

# Копируем исходный код
COPY . .

# Открываем порт 3001 (как указано в docker-compose)
EXPOSE 3001

# Команда для запуска в режиме разработки (с hot reload)
CMD ["npm", "run", "dev"]