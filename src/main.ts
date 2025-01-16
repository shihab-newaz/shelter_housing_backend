import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Real Estate Admin API')
    .setDescription('API documentation for real estate admin panel')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Authentication', 'Authentication endpoints')
    .addTag('Projects', 'Project management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: [
      'http://localhost:3000', // Next.js development
      'https://your-nextjs-domain.com', // Production domain
    ],
    credentials: true,
  });

  await app.listen(8000);
}
bootstrap();