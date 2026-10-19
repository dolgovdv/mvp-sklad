/// <reference types="node" />
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // Создаем приложение с явным логированием в консоль Docker
  const app = await NestFactory.create(AppModule, { logger: ['log', 'error', 'warn', 'debug'] });
  
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  const port = process.env.PORT || 3001;
  
  // 0.0.0.0 открывает порт наружу для контейнера фронтенда
  await app.listen(port, '0.0.0.0');
  console.log(`\n[NestJS] Сервер успешно запущен на интерфейсе 0.0.0.0:${port} 🚀\n`);
}
bootstrap();
