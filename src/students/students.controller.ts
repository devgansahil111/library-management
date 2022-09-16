import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { GetStudentsFilterDto } from './dto/get-students-filter.dto';
import { UpdateStudentGenderDto } from './dto/update-student-gender.dto';
import { StudentGender } from './student-gender.enum';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Get()
  getStudents(@Query() filterDto: GetStudentsFilterDto) {
    return this.studentsService.getStudents(filterDto);
  }

  @Get('/:id')
  getStudentById(@Param('id') id: string) {
    return this.studentsService.getStudentById(id);
  }

  @Post('signup')
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.createStudent(createStudentDto);
  }

  @Delete('/:id')
  deleteStudent(@Param('id') id: string) {
    return this.studentsService.deleteStudent(id);
  }

  @Patch('/:id/gender')
  updateStudentGender(
    @Param('id') id: string,
    @Body() updateStudentGenderDto: UpdateStudentGenderDto,
  ) {
    const { gender } = updateStudentGenderDto;
    return this.studentsService.updateStudentGender(id, gender);
  }
}

// ---------------------------------------------------------------------------------- //
// Memory Data API's

// @Controller('students')
// export class StudentsController {
//   constructor(private studentsService: StudentsService) {}

// @Get()
  // getStudents(@Query() filterDto: GetStudentsFilterDto): Student[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.studentsService.getStudentsWithFilter(filterDto);
  //   } else {
  //     return this.studentsService.getAllStudents();
  //   }
  // }


  // @Get('/:id')
  // getStudentById(@Param('id') id: string): Student {
  //   return this.studentsService.getStudentById(id);
  // }


  // @Post()
  // createStudent(@Body() createStudentDto: CreateStudentDto): Student {
  //   return this.studentsService.createStudent(createStudentDto);
  // }


  // @Delete('/:id')
  // deleteStudent(@Param('id') id: string): void {
  //   return this.studentsService.deleteStudent(id);
  // }


  // @Patch('/:id/gender')
  // updateStudentGender(
  //   @Param('id') id: string,
  //   @Body() updateStudentGenderDto: UpdateStudentGenderDto,
  // ): Student {
  //   const { gender } = updateStudentGenderDto;
  //   return this.studentsService.updateStudentGender(id, gender);
  // }