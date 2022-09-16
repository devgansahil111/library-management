import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async add(createBookDto: CreateBookDto) {
    try {
      const { bookName, description, authorName, quantity, category, available } =
        createBookDto;

      let data = this.bookRepository.create({
        bookName,
        description,
        authorName,
        quantity,
        category,
        available
      });
      console.log(data);
      data = await this.bookRepository.save(data);
      return data;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException();
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  //*************************************************************************************************************************** */

  async findAll() {
    const books = await this.bookRepository.find({});
    return books;
  }

  //****************************************************************************************************************************** */

  async findById(id: string) {
    const found = await this.bookRepository.findOne({ where: { id } });
    if (!found) {
      throw new NotFoundException(`Book with ${id} not found`);
    }
    return found;
  }

  //***************************************************************************************************************************************

  async updateBook(id: string, updateBookDto: UpdateBookDto) {
    let book = await this.bookRepository.findOne({ id });
    // console.log(book);

    if (!book) {
      throw new NotFoundException();
    }
    book.bookName = updateBookDto.bookName;
    book.available = updateBookDto.available;

    await this.bookRepository.save(book);
    return book;
  }

  //*************************************************************************************************************************

  async deleteBook(id: string) {
    const result = await this.bookRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }
}
