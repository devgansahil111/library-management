import { Order } from 'src/order/order.entity'
import {Entity ,PrimaryGeneratedColumn,Column,OneToMany} from 'typeorm'


@Entity()
export class Admin {

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column({unique:true})
    username: string

    @Column({unique:true})
    email:string

    @Column()
    password:string

    
}
