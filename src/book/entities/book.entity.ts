import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
// import { Issue } from './issue.entity'

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  bookName: string;

  @Column()
  description: string;

  @Column()
  authorName: string;

  @Column()
  category: string;

  @Column()
  quantity: number;

  @Column()
  available: Boolean;

  @CreateDateColumn()
  issued_At: Date;

  @CreateDateColumn()
  returned_At: Date;

  @Column()
  fine: number;

  // @ManyToOne(() => Issue, (issue) => issue.book,
  // {onDelete:"NO ACTION"})
  // issue: Issue
}
