import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student, StudentGender } from './students.model';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  getAllStudents(): Student[] {
    return this.studentsService.getAllStudents();
  }

  @Get("/:id")
  getStudentById(@Param("id") id: string): Student {
    return this.studentsService.getStudentById(id);
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto): Student {
    return this.studentsService.createStudent(createStudentDto);
  }

  @Delete("/:id")
  deleteStudent(@Param("id") id: string): void {
    return this.studentsService.deleteStudent(id);
  }

  @Patch("/:id/gender")
  updateStudentGender(
    @Param("id") id: string,
    @Body("gender") gender: StudentGender,
  ): Student {
    return this.studentsService.updateStudentGender(id, gender);
  }
}
