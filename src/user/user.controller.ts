import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  SerializeOptions,
  ClassSerializerInterceptor,
  UseGuards
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
// @UseGuards(AuthGuard())
@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  excludePrefixes: ['id', 'password'],
})
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.signUp(createUserDto);
  }

  @Post('/signin')
  signin(@Body() createUserDto: CreateUserDto) {
    return this.userService.signIn(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
