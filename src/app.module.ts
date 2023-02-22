import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import configuration from '../config/configuration';
import type { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import type { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import { User } from '@/entity/User.entity';
import { AboutModule } from './about/about.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: configuration.db.type as
        | MysqlConnectionOptions['type']
        | PostgresConnectionOptions['type'],
      host: configuration.db.host,
      port: configuration.db.port,
      username: configuration.db.username,
      password: configuration.db.password,
      database: configuration.db.database,
      entities: [User],
      synchronize: process.env.NODE_ENV === 'development',
    }),
    AuthModule,
    UsersModule,
    AboutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
