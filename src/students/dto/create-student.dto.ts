import { IsNotEmpty } from 'class-validator';

export class CreateStudentDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  phone: number;
}
