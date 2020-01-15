import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(); //跨域
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  });
  const options = new DocumentBuilder()
    .setTitle('NestJS全栈之巅-前端API')
    .setDescription('供网站和APP调用的API')
    .setVersion('1.0')
    .addBearerAuth() //启用 bear token功能
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.SERVER_PORT || 3001
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
