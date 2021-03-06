import { Module } from '@nestjs/common'
import { HttpModule } from '@nestjs/axios'
import { TypeOrmModule } from '@nestjs/typeorm'
import Products from './entities/products.entity'
import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { BrandModule } from 'src/brand/brand.module'
import { UsersModule } from 'src/users/users.module'
import { ReviewAggregateModule } from 'src/reviewAggregate/reviewAggregate.module'
import { ConfigModule } from '@nestjs/config'

@Module({
    imports: [TypeOrmModule.forFeature([Products]), ConfigModule, HttpModule, BrandModule, UsersModule, ReviewAggregateModule],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService]
  })
export class ProductsModule {
}
