import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './database/database.module'
import { GoogleAuthenticationModule } from './google-authentication/googleAuthentication.module'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { ReviewsModule } from './reviews/reviews.module'
import { ReviewAggregateModule } from './reviewAggregate/reviewAggregate.module'
import { BrandModule } from './brand/brand.module'

@Module({
  imports: [
    UsersModule, 
    ConfigModule.forRoot(),
    DatabaseModule,
    GoogleAuthenticationModule,
    AuthModule,
    ProductsModule,
    ReviewsModule,
    ReviewAggregateModule,
    BrandModule
  ]
})

export class AppModule {}
