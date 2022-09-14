import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { GetBooksDto } from './dto/get-book.dto';

@Injectable()
export class BookService {

  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>
  ) { }


  async add(createBookDto: CreateBookDto): Promise<Book> {
    try {
      const { bookName, description, authorName, quantity, category } = createBookDto;

      let data = this.bookRepository.create({
        bookName,
        description,
        authorName,
        quantity,
        category
      })
      data = await this.bookRepository.save(data);
      return data;
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException('Duplicacy error')
      } else {
        throw new InternalServerErrorException()
      }
    }
  }

  //*************************************************************************************************************************** */

  async findAll(getbookDto:GetBooksDto):Promise<Book[]> {
    return this.bookRepository.find({})
  }

  //****************************************************************************************************************************** */


  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
