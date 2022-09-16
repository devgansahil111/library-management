import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Issue } from './entities/issue.entity';


@Module({
  imports:[
    (TypeOrmModule.forFeature([Book])),
   
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
