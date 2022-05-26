import { DisciplineEntity } from '../../disciplines/entities/discipline.entity';
import { StudentEntity } from '../../students/entities/student.entity';
import { WorkEntity } from '../../works/entities/work.entity';
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
