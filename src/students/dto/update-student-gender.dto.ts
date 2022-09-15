import { IsEnum } from 'class-validator';
import { StudentGender } from '../students.model';

export class UpdateStudentGenderDto {
    @IsEnum(StudentGender)
    gender: StudentGender;
}