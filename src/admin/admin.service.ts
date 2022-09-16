import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
    private jwtService: JwtService,
  ) {}

  async signUp(createAdminDto: CreateAdminDto) {
    const { username, password, email } = createAdminDto;

    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    let data = this.adminRepository.create({
      username,
      email,
      password: hashedPassword,
    });
    // console.log(data);
    try {
      data = await this.adminRepository.save(data);
      return data;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email Already Exists!');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  //*****************************************************************************************************************/

  async signIn(createAdminDto: CreateAdminDto) {
    const { email, password } = createAdminDto;
    const admin = await this.adminRepository.findOne({ email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      const payload = { email };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
  }

  //***************************************************************************************** */

  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
