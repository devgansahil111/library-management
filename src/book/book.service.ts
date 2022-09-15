import { ConflictException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

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

  async findAll() {
    const books = await this.bookRepository.find({});
    return books;
  }

  //****************************************************************************************************************************** */


  async findById(id: string):Promise<Book> {
    const found = await this.bookRepository.findOne({where:{id}});
    if(!found){
      throw new NotFoundException(`Book with ${id} not found`)
    }
    return found;
  }



 async updateBook(id: string, updateBookDto: UpdateBookDto) {
const book = await this.bookRepository.findOneBy({id});
if(!book){
  throw new NotFoundException();
}
    return
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
