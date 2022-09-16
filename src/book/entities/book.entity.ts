import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
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

  // @ManyToOne(() => Issue, (issue) => issue.book,
  // {onDelete:"NO ACTION"})
  // issue: Issue
}
