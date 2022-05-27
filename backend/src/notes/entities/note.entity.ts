import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { StudentEntity } from 'src/students/entities/student.entity';

@Entity()
export class NoteEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
  @Column()
  content: string;

  @ManyToOne(() => StudentEntity, (group: StudentEntity) => group.notes)
  public student: StudentEntity;
}
