import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Roles } from '../user/roles.decorator';
import { Role } from 'src/user/entities/user.entity';
import { PassportModule } from '@nestjs/passport';

@Controller('book')
// @UseGuards(AuthGuard())
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post('/add')
  @Roles(Role.ADMIN)
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
  @Roles(Role.ADMIN)
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.updateBook(id, updateBookDto);
  }

  @Delete('/:id')
  @Roles(Role.ADMIN)
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(id);
  }
}
