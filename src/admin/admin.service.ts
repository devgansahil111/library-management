import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import{ Repository} from 'typeorm'

@Injectable()
export class AdminService {

  constructor(
    @InjectRepository(Admin)
    private adminRepository:Repository<Admin>,
  ){}


  async create(createAdminDto: CreateAdminDto) {
    try{
      const{username,password,email} = createAdminDto;

      let data = this.adminRepository.create({
        username,
        email,
        password 
      })
      data = await this.adminRepository.save(data)
    }catch(error){
      if(error.code === '23505'){
        throw new ConflictException("Duplicacy Error")
      }else{
        throw new InternalServerErrorException()
      }
    }
    
  }





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
