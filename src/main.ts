import type { PkgJSON } from '~types/package.json';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import configuration from '../config/configuration';

const pkgJson: PkgJSON = JSON.parse(
  readFileSync(join(process.cwd(), 'package.json'), 'utf8'),
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle(pkgJson.name)
    .setDescription(pkgJson.description)
    .setVersion(pkgJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(configuration.swaggerPath, app, document);
  app.setGlobalPrefix(configuration.globalPrefix);
  await app.listen(configuration.port);
}

bootstrap().catch(console.error);
