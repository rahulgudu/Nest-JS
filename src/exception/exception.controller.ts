import { Controller, Get, HttpException, Param, ParseIntPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionsFilter } from '../filters/http-exceptions/http-exceptions.filter.js';

@Controller('exception')
@UseFilters(HttpExceptionsFilter)
export class ExceptionController {
    @Get('hello/:id')
    getHello(@Param('id', ParseIntPipe) id: number) {
        return {Message: `Your ID is: ${id}`}
    }
}
