import { AuditoryEntity } from '../../auditories/entities/auditory.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PairTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: number;

  @OneToMany(() => PairEntity, (pair: PairEntity) => pair.pairType)
  pairs: PairEntity[];
}
