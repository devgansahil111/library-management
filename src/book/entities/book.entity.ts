
import { Employee } from 'src/employee/entities/employee.entity'
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'


@Entity()
export class Book {

   @PrimaryGeneratedColumn('uuid')
   id: string

   @Column({ unique: true })
   bookName: string

   @Column()
   description: string

   @Column()
   authorName: string

   @Column()
   category: string

   @Column()
   quantity: number

   @Column({ default: false })
   available: boolean


   @ManyToOne(() => Employee, (employee) => employee.book,
   {onDelete:"NO ACTION"})
   employee: Employee

}

