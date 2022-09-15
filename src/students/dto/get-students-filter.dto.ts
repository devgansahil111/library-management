import { StudentGender } from "../students.model";
import { IsOptional, IsString, IsEnum } from 'class-validator';

export class GetStudentsFilterDto {
    @IsOptional()
    @IsEnum(StudentGender)
    gender?: StudentGender;

    @IsOptional()
    @IsString()
    search?: string;
}