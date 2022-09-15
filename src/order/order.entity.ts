import { Admin } from 'src/admin/entities/admin.entity';
import { Book } from 'src/book/entities/book.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({default:1})
  quantity:number

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  createAt: Date;




  @ManyToOne(() => Book, (book) => book.order, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    eager: true,
  })
  @JoinColumn()
  book: Book;

  // @ManyToOne(() => Student, (student) => student.order, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  // })
  // student: Student;
}