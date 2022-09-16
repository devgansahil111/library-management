
// import {
//     Column,
//     CreateDateColumn,
//     Entity,
//     PrimaryGeneratedColumn,
//     OneToMany
// } from 'typeorm';
// import { Book } from './book.entity';


// @Entity()
// export class Issue {
//     @PrimaryGeneratedColumn('uuid')
//     id: string;



//     @CreateDateColumn({
//         type: 'timestamp',
//         default: () => 'CURRENT_TIMESTAMP(3)',
//     })
//     issueAt: Date;

//     @Column({ type: Date }) 
//     retutnAt: Date

//     @Column({ default: 0 })
//     fine: number

//     @OneToMany(() => Book, (book) => book.issue,
//     {cascade: true})
//     book: Book[];
// }