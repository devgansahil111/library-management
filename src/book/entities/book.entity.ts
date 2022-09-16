import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Issue } from './issue.entity'


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

   @Column({default:[]})
   quantity: number

   @Column({ default: false })
   available: boolean


   @ManyToOne(() => Issue, (issue) => issue.book,
   {onDelete:"NO ACTION"})
   issue: Issue

}

