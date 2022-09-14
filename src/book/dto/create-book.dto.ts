import { IsString } from "class-validator";

export class CreateBookDto {

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
    deletedAt: Date

}
