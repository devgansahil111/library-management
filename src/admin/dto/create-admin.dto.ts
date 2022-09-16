import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAdminDto {
  @IsString()
  username: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
