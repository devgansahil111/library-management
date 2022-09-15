import { Injectable, NotFoundException } from '@nestjs/common';
import { Student, StudentGender } from './students.model';
import { v4 as uuid } from 'uuid';
import { CreateStudentDto } from './dto/create-student.dto';
import { GetStudentsFilterDto } from './dto/get-students-filter.dto';

@Injectable()
export class StudentsService {
  private students: Student[] = [];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentsWithFilter(filterDto: GetStudentsFilterDto): Student[] {
    const { gender, search } = filterDto;
    let students = this.getAllStudents();
    if (gender) {
      students = students.filter((student) => student.gender === gender);
    }
    if (search) {
      students = students.filter((student) => {
        if (
          student.username.includes(search) ||
          student.email.includes(search)
        ) {
          return true;
        }
        return false;
      });
    }
    return students;
  }

  getStudentById(id: string): Student {
    const found = this.students.find((student) => student.id === id);
    if (!found) {
      throw new NotFoundException('Student with this Id not found !');
    }
    return found;
  }

  createStudent(createStudentDto: CreateStudentDto): Student {
    const { username, email, password, phone } = createStudentDto;

    const student: Student = {
      id: uuid(),
      username,
      email,
      password,
      phone,
      gender: StudentGender.MALE,
    };

    this.students.push(student);
    return student;
  }

  deleteStudent(id: string): void {
    const found = this.getStudentById(id);
    this.students = this.students.filter((student) => student.id !== id);
  }

  updateStudentGender(id: string, gender: StudentGender) {
    const student = this.getStudentById(id);
    student.gender = gender;
    return student;
  }
}
