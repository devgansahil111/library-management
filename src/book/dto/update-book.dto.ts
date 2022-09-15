import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {

    @IsString()
    bookName: string

    @IsString()
    description: string

    @IsString()
    authorName:string

    @IsString()
    quantity:number

    @IsString()
    category:string

   @IsString()
   available:boolean
}
