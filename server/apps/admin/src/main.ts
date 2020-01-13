import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  // app 是基于express的
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors(); //跨域
  app.useStaticAssets('uploads', {
    prefix: '/uploads',
  });
  const options = new DocumentBuilder()
    .setTitle('NestJS全栈之巅-后台管理')
    .setDescription('供后台管理界面调用的服务端API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.ADMIN_PORT || 3002
  await app.listen(PORT);
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
