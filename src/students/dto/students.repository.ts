import { Repository, EntityRepository } from 'typeorm';
import { Student } from '../dto/student.entity';

@EntityRepository(Student)
export class StudentsRepository extends Repository<Student> {

}