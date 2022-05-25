import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InstituteEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
