import { AuditoryEntity } from '../../auditories/entities/auditory.entity';
import { DisciplineEntity } from '../../disciplines/entities/discipline.entity';
import { EventEntity } from '../../events/entities/event.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import { InstituteEntity } from '../../institutes/entities/institute.entity';
import { StudentEntity } from '../../students/entities/student.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @Column({ default: 1 })
  course: number;

  // RELATIONS
  @ManyToMany(
    () => DisciplineEntity,
    (discipline: DisciplineEntity) => discipline.groups,
  )
  @JoinTable()
  public disciplines: DisciplineEntity[];

  @ManyToMany(() => EventEntity, (event: EventEntity) => event.groups)
  @JoinTable()
  public events: EventEntity[];

  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.groups)
  public pairs: PairEntity[];

  @ManyToOne(
    () => InstituteEntity,
    (institute: InstituteEntity) => institute.groups,
  )
  public institute: InstituteEntity;

  @OneToMany(() => StudentEntity, (student: StudentEntity) => student.group)
  public students: StudentEntity[];
}
