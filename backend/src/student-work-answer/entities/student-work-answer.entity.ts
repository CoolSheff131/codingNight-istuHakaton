import { DisciplineEntity } from 'src/disciplines/entities/discipline.entity';
import { StudentEntity } from 'src/students/entities/student.entity';
import { WorkEntity } from 'src/works/entities/work.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StudentWorkAnswerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // RELATIONS
  @ManyToOne(
    () => StudentEntity,
    (student: StudentEntity) => student.studentWorkAnswers,
  )
  public student: StudentEntity;

  @ManyToOne(() => WorkEntity, (work: WorkEntity) => work.studentWorkAnswers)
  public work: WorkEntity;
}
