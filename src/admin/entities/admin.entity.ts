import {Entity ,PrimaryGeneratedColumn,Column} from 'typeorm'


@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    username: string

    @Column()
    email:string

    @Column()
    password:string


}
