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

   //  @Column()
   //  borrow: Id,price,timestamps,return-null,refund,fine-null,comments
   //order: orderid ,



    @Column({nullable:true})
   deletedAt: Date

   @Column({default:false})
   isDeleted:Boolean

}

//
