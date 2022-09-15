import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/order/order.entity';

@Module({
  imports:[
    (TypeOrmModule.forFeature([Book,Order])),
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
