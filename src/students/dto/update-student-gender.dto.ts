import { IsEnum } from 'class-validator';
import { StudentGender } from '../student-gender.enum';

export class UpdateStudentGenderDto {
    @IsEnum(StudentGender)
    gender: StudentGender;
}