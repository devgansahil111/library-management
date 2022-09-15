import {IsNotEmpty, IsString } from 'class-validator'

export class CreateAdminDto {


  @IsString()
  @IsNotEmpty()
    username:string

    @IsString()
    email:string

    @IsString()
    password:string
}
