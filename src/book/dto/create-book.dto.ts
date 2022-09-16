import { IsBoolean, IsNumber, IsString } from "class-validator";

export class CreateBookDto {

    @IsString()
    bookName: string

    @IsString()
    description: string

    @IsString()
    authorName:string

    @IsNumber()
    quantity:number

    @IsString()
    category:string

   @IsBoolean()
   available: Boolean

}
