import { CorpusEntity } from 'src/corps/entities/corps.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { PairEntity } from 'src/pairs/entities/pair.entity';
import {
  Column,
  Entity,
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

  // RELATIONS
  @ManyToMany(() => EventEntity, (event: EventEntity) => event.auditories)
  public events: EventEntity[];
  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.auditories)
  public pairs: PairEntity[];
  @ManyToOne(() => CorpusEntity, (corpus: CorpusEntity) => corpus.auditories)
  public corpus: CorpusEntity;
}
