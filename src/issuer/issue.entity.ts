// // import { Admin } from 'src/admin/entities/admin.entity';
// import { Book } from 'src/book/entities/book.entity';
// import {
//     Column,
//     CreateDateColumn,
//     Entity,
//     JoinColumn,
//     ManyToOne,
//     PrimaryGeneratedColumn,
//   } from 'typeorm';
  

// @Entity()
// export class Issue {
//   @PrimaryGeneratedColumn('uuid')
//   id: string;

//   @Column()
//   quantity: number

//   @CreateDateColumn({
//     type: 'timestamp',
//     default: () => 'CURRENT_TIMESTAMP(3)',
//   })
//   issueAt: Date;

//   @Column({type:Date})
//   retutnAt: Date

//   @Column({default:0})
//   fine: number


//   @ManyToOne(() => Book, (book) => book.issue, {
//     onUpdate: 'CASCADE',
//     onDelete: 'CASCADE',
//     eager: true,
//   })
//   @JoinColumn()
//   book: Book;

//   // @ManyToOne(() => Student, (student) => student.issue, {
//   //   onUpdate: 'CASCADE',
//   //   onDelete: 'CASCADE',
//   // })
//   // student: Student;
// }