import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common';
import { StudentGender } from './student-gender.enum';
import { v4 as uuid } from 'uuid';
import { CreateStudentDto } from './dto/create-student.dto';
import { GetStudentsFilterDto } from './dto/get-students-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './dto/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getStudents(filterDto: GetStudentsFilterDto) {
    const { gender, search } = filterDto;
    const query = this.studentRepository.createQueryBuilder('student');
    if (gender) {
      query.andWhere('student.gender = :gender', { gender });
    }
    if (search) {
      query.andWhere(
        'student.username LIKE = :search OR student.email LIKE = :search',
        { search: `%${search}%` },
      );
    }
    const students = await query.getMany();
    return students;
  }

  async getStudentById(id: string) {
    const found = await this.studentRepository.findOne(id);
    if (!found) {
      throw new NotFoundException('Student with this Id not found!');
    }
    return found;
  }

  async createStudent(createStudentDto: CreateStudentDto) {
    const { username, email, password, phone } = createStudentDto;

    // Hash
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // console.log('salt', salt);
    // console.log('hashedPassword', hashedPassword);

    const student = this.studentRepository.create({
      username,
      email,
      password: hashedPassword,
      phone,
      gender: StudentGender.MALE,
    });

    try {
      const me = await this.studentRepository.save(student);
      return me;
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Email Already Exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  // async signIn(createStudentDto: CreateStudentDto) {
  //   const { email, password } = createStudentDto;

  //   const user = await this.studentRepository.findOne({ email });
  //   if (user && (await bcrypt.compare(password, user.password))) {
  //     // return "Success!"
  //     const payload: JwtPayload = { email };
  //     const accessToken: string = await this.jwtService.sign(payload);
  //     return { accessToken };
  //   } else {
  //     throw new UnauthorizedException('Please check your login credentials!');
  //   }
  // }

  async deleteStudent(id: string) {
    const result = await this.studentRepository.delete(id);
    // console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException('Student with this Id not present!');
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
// Memorary Data API's

// @Injectable()
// export class StudentsService {
//   constructor(
//     @InjectRepository(Student)
//     private studentRepository: Repository<Student>,
//   ) {}
// private students: Student[] = [];

// getAllStudents(): Student[] {
//   return this.students;
// }

// getStudentsWithFilter(filterDto: GetStudentsFilterDto): Student[] {
//   const { gender, search } = filterDto;
//   let students = this.getAllStudents();
//   if (gender) {
//     students = students.filter((student) => student.gender === gender);
//   }
//   if (search) {
//     students = students.filter((student) => {
//       if (
//         student.username.includes(search) ||
//         student.email.includes(search)
//       ) {
//         return true;
//       }
//       return false;
//     });
//   }
//   return students;
// }

// getStudentById(id: string): Student {
//   const found = this.students.find((student) => student.id === id);
//   if (!found) {
//     throw new NotFoundException('Student with this Id not found !');
//   }
//   return found;
// }

// createStudent(createStudentDto: CreateStudentDto): Student {
//   const { username, email, password, phone } = createStudentDto;

//   const student: Student = {
//     id: uuid(),
//     username,
//     email,
//     password,
//     phone,
//     gender: StudentGender.MALE,
//   };

//   this.students.push(student);
//   return student;
// }

// deleteStudent(id: string): void {
//   const found = this.getStudentById(id);
//   this.students = this.students.filter((student) => student.id !== id);
// }

// updateStudentGender(id: string, gender: StudentGender) {
//   const student = this.getStudentById(id);
//   student.gender = gender;
//   return student;
// }
