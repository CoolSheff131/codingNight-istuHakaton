import { PairEntity } from 'src/pairs/entities/pair.entity';
import { StudentWorkAnswerEntity } from 'src/student-work-answer/entities/student-work-answer.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  surname: string;
  @Column()
  firstName: string;
  @Column()
  patronymic: string;
  @Column()
  email: string;
  @Column()
  login: string;
  @Column()
  password: string;
  @Column()
  is_Starosta: boolean;
  @Column()
  subgroup_number: number;
  @Column()
  avatar_url: string;

  // RELATIONS
  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.students)
  public pairs: PairEntity[];

  @OneToMany(
    () => StudentWorkAnswerEntity,
    (studentWorkAnswer: StudentWorkAnswerEntity) => studentWorkAnswer.student,
  )
  public studentWorkAnswers: StudentWorkAnswerEntity[];
}
