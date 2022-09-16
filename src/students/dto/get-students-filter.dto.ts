import { StudentGender } from "../student-gender.enum";
import { IsOptional, IsString, IsEnum } from 'class-validator';

export class GetStudentsFilterDto {
    @IsOptional()
    @IsEnum(StudentGender)
    gender?: StudentGender;

    // filter
    @IsOptional()
    @IsString()
    search?: string;
}