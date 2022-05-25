import { AuditoryEntity } from 'src/auditories/entities/auditory.entity';
import { DisciplineEntity } from 'src/disciplines/entities/discipline.entity';
import { GroupEntity } from 'src/groups/entities/group.entity';
import { PairTypeEntity } from 'src/pair-types/entities/pair-type.entity';
import { StudentEntity } from 'src/students/entities/student.entity';
import { TeacherEntity } from 'src/teachers/entities/teacher.entity';
import { WorkEntity } from 'src/works/entities/work.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PairEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  pairNumber: number;
  @Column()
  dayNumber: number;
  @Column()
  subGroupNumber: number;

  @Column()
  weekBegining: Date;

  // RELATIONS
  @ManyToMany(() => StudentEntity, (student: StudentEntity) => student.pairs)
  @JoinTable()
  public students: StudentEntity[];

  @ManyToMany(
    () => AuditoryEntity,
    (auditory: AuditoryEntity) => auditory.pairs,
  )
  @JoinTable()
  public auditories: GroupEntity[];

  @ManyToMany(() => GroupEntity, (group: GroupEntity) => group.pairs)
  @JoinTable()
  public groups: GroupEntity[];

  @ManyToMany(() => TeacherEntity, (teacher: TeacherEntity) => teacher.pairs)
  @JoinTable()
  public teachers: TeacherEntity[];

  @ManyToOne(
    () => DisciplineEntity,
    (discipline: DisciplineEntity) => discipline.pairs,
  )
  public discipline: DisciplineEntity;
  @ManyToOne(
    () => PairTypeEntity,
    (pairTypeEntity: PairTypeEntity) => pairTypeEntity.pairs,
  )
  public pairType: PairTypeEntity;

  @OneToOne(() => WorkEntity)
  @JoinColumn()
  work: WorkEntity;
}
