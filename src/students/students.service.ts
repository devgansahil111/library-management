import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentGender } from './student-gender.enum';
import { v4 as uuid } from 'uuid';
import { CreateStudentDto } from './dto/create-student.dto';
import { GetStudentsFilterDto } from './dto/get-students-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getStudents(filterDto: GetStudentsFilterDto) {
    const { gender, search } = filterDto;
    const query = this.studentRepository.createQueryBuilder("student");
    if(gender) {
      query.andWhere("student.gender = :gender", { gender });
    }
    if(search) {
      query.andWhere("student.username LIKE = :search OR student.email LIKE = :search", {search: `%${search}%`},)
    }
    const students = await query.getMany();
    return students;
  }
  
  async getStudentById(id: string) {
    const found = await this.studentRepository.findOneBy({id});
    if (!found) {
      throw new NotFoundException('Student with this Id not found!');
    }
    return found;
  }

  async createStudent(createStudentDto: CreateStudentDto) {
    const { username, email, password, phone } = createStudentDto;

    const student = this.studentRepository.create({
      username,
      email,
      password,
      phone,
      gender: StudentGender.MALE,
    });
    
    await this.studentRepository.save(student);
    return student;
  }

  async deleteStudent(id: string) {
    const result = await this.studentRepository.delete(id);
    // console.log(result);
    if(result.affected === 0) {
      throw new NotFoundException("Student with this Id not present!");
    }
  }

  async updateStudentGender(id: string, gender: StudentGender) {
    const student = await this.getStudentById(id);
    student.gender = gender;
    await this.studentRepository.save(student);
    return student;
  }
}

// ---------------------------------------------------------------------------------------- //
  

// async issueBook()