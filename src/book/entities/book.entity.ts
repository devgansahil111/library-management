
// import { Issue } from 'src/issuer/issue.entity'
import {Entity,PrimaryGeneratedColumn,Column,OneToMany} from 'typeorm'


@Entity()
 export class Book {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    bookName: string
    
    @Column()
    description: string

    @Column()
    authorName : string

    @Column()
    category: string

    @Column()
    quantity: number


   // @OneToMany(() => Issue, (issue) => issue.book, {
   //    cascade: true,
   //    onDelete: 'CASCADE',
   //    onUpdate: 'CASCADE',
   //  })
   //  issue: Issue[];
    

   

}

//
