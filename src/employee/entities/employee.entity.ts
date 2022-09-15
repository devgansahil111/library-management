import { Book } from 'src/book/entities/book.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    OneToMany
} from 'typeorm';


@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;



    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(3)',
    })
    issueAt: Date;

    @Column({ type: Date }) 
    retutnAt: Date

    @Column({ default: 0 })
    fine: number

    @OneToMany(() => Book, (book) => book.employee,
    {cascade: true})
    book: Book[];
}
