import { AuditoryEntity } from '../../auditories/entities/auditory.entity';
import { EventTypeEntity } from '../../event-types/entities/event-type.entity';
import { GroupEntity } from '../../groups/entities/group.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import { TeacherEntity } from '../../teachers/entities/teacher.entity';
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
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  dt: Date;

  @Column()
  description: string;
  @Column()
  pairNumber: number;
  @Column('int', { array: true, nullable: true })
  relatedQueriesIds: number[];

  // RELATIONS
  @ManyToMany(
    () => AuditoryEntity,
    (auditory: AuditoryEntity) => auditory.events,
  )
  @JoinTable()
  public auditories: AuditoryEntity[];

  @ManyToMany(() => GroupEntity, (group: GroupEntity) => group.events)
  @JoinTable()
  public groups: GroupEntity[];

  @ManyToMany(() => TeacherEntity, (teacher: TeacherEntity) => teacher.events)
  @JoinTable()
  public teachers: TeacherEntity[];

  @ManyToOne(
    () => EventTypeEntity,
    (eventType: EventTypeEntity) => eventType.events,
  )
  public eventType: EventTypeEntity;

  @OneToOne(() => PairEntity)
  @JoinColumn()
  public pair: PairEntity;
}
