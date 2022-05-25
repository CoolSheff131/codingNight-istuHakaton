import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AdminEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  login: string;
  @Column()
  password: string;
}
