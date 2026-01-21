import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //global validation
  app.useGlobalPipes(new ValidationPipe(
    { whitelist: true, 
      forbidNonWhitelisted: true,
      transform: true,
      stopAtFirstError: true
    }
  ));

  //global exception filter
  app.useGlobalFilters(new HttpExceptionFilter());

  //auto apply @Exclude/@Expose on responses
  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector))
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
