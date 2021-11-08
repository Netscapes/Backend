import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import config from 'ormconfig'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot(config),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
