
import {Entity,PrimaryGeneratedColumn,Column} from 'typeorm'


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



   

}

