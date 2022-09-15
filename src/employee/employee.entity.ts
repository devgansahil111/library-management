
import { Book } from 'src/book/entities/book.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  

@Entity()
export class Issue {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  quantity: number

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(3)',
  })
  issueAt: Date;

  @Column({type:Date})
  retutnAt: Date

  @Column({default:0})
  fine: number



}