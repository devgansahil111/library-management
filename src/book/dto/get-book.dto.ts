import { IsOptional, IsString } from "class-validator";

export class GetBooksDto{
    @IsOptional()
    @IsString()
    search?: string;
}