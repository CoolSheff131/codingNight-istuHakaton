import { CorpusEntity } from '../../corps/entities/corps.entity';
import { EventEntity } from '../../events/entities/event.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class AuditoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;
  @Column()
  floor: number;

  @Column()
  name: string;

  // RELATIONS
  @ManyToMany(() => EventEntity, (event: EventEntity) => event.auditories)
  public events: EventEntity[];

  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.auditories)
  @JoinTable()
  public pairs: PairEntity[];

  @ManyToOne(() => CorpusEntity, (corpus: CorpusEntity) => corpus.auditories)
  public corpus: CorpusEntity;
}
