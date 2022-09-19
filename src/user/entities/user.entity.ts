import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

export enum Role {
    ADMIN = 'admin',
    ISSUER = 'issuer',
    GUEST ='guest'
};

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: Role;
}


