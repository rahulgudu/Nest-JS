import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from '../product/product.service.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts() {
        return this.productService.getAllProducts()
    }

    @Get(":id")
    getProduct(@Param("id") id: string) {
        return this.productService.getProductById(Number(id));
    }
}
