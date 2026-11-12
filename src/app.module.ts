import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UserController } from './user/user.controller.js';
import { ProductService } from './product/product.service.js';
import { ProductsController } from './products/products.controller.js';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
