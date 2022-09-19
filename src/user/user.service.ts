import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role, User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUserDto: CreateUserDto) {
    const { username, password, email, role } = createUserDto;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    let data = this.userRepository.create({
      username,
      email,
      password: hashedPassword,
      role
    });
    try {
      data = await this.userRepository.save(data);
      return data;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email Already Exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async signIn(createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    // console.log(createUserDto);
    
    const user = await this.userRepository.findOne({ email: email });
    // console.log(user);
    

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
