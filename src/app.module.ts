import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
