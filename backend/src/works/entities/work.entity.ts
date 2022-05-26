import { DisciplineEntity } from '../../disciplines/entities/discipline.entity';
import { StudentWorkAnswerEntity } from '../../student-work-answer/entities/student-work-answer.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class WorkEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  fileUrl: string;

  // RELATIONS
  @ManyToOne(
    () => DisciplineEntity,
    (discipline: DisciplineEntity) => discipline.works,
  )
  public discipline: DisciplineEntity;

  @OneToMany(
    () => StudentWorkAnswerEntity,
    (studentWorkAnswer: StudentWorkAnswerEntity) => studentWorkAnswer.work,
  )
  public studentWorkAnswers: StudentWorkAnswerEntity[];
}
