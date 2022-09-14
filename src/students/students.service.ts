import { Injectable } from '@nestjs/common';
import { Student, StudentGender } from './students.model';
import { v4 as uuid} from 'uuid';
import { CreateStudentDto } from './dto/create-student.dto';

@Injectable()
export class StudentsService {
    private students: Student[] = [];

    getAllStudents(): Student[] {
        return this.students
    }

    getStudentById(id: string): Student {
        return this.students.find((student) => student.id === id );
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
        this.students = this.students.filter((student) => student.id !== id);
    }

    updateStudentGender(id: string, gender: StudentGender) {
        const student = this.getStudentById(id);
        student.gender = gender;
        return student;
    }
}
