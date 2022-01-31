import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { createDocument } from './Config/Swagger/swagger';
import { ValidationPipe } from './Common/Pipes/validation.pipes';
import * as cookieParser from 'cookie-parser';
import { HttpExceptionFilter } from './Common/Filters/exception.filter';

/**
 * This is a main file program execution is started from here
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8080',
    credentials: true
  });
  SwaggerModule.setup('api', app, createDocument(app));
  app.useGlobalFilters(new HttpExceptionFilter());
  //app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  await app.listen(3004);
}
bootstrap();
