import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/add')
  add(@Body() createBookDto: CreateBookDto) {
    return this.bookService.add(createBookDto);
  }

  @Get('/list')
  findAll() {
    return this.bookService.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.bookService.findById(id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(id, updateBookDto);
  }

   @Delete('/:id')
   remove(@Param('id') id: string) {
     return this.bookService.deleteBook(id);
   }
}
