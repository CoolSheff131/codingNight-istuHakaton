import { PairEntity } from '../../pairs/entities/pair.entity';
import { StudentWorkAnswerEntity } from '../../student-work-answer/entities/student-work-answer.entity';
import { GroupEntity } from '../../groups/entities/group.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
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
  @Column({ default: false })
  isStarosta: boolean;
  @Column({ default: 1 })
  subgroupNumber: number;
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

  @ManyToOne(() => GroupEntity, (group: GroupEntity) => group.students)
  public group: GroupEntity;
}
