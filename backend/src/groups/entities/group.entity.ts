import { AuditoryEntity } from 'src/auditories/entities/auditory.entity';
import { DisciplineEntity } from 'src/disciplines/entities/discipline.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { PairEntity } from 'src/pairs/entities/pair.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  // RELATIONS
  @ManyToMany(
    () => DisciplineEntity,
    (discipline: DisciplineEntity) => discipline.groups,
  )
  public disciplines: DisciplineEntity[];

  @ManyToMany(() => EventEntity, (event: EventEntity) => event.groups)
  public events: EventEntity[];

  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.groups)
  public pairs: PairEntity[];

  @OneToMany(() => AuditoryEntity, (post: AuditoryEntity) => post.corpus)
  public auditories: AuditoryEntity[];
}
