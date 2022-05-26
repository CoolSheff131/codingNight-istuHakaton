import { GroupEntity } from '../../groups/entities/group.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import { WorkEntity } from '../../works/entities/work.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class DisciplineEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  //RELATIONS
  @ManyToMany(() => GroupEntity, (group: GroupEntity) => group.disciplines)
  public groups: GroupEntity[];

  @OneToMany(() => WorkEntity, (work: WorkEntity) => work.discipline)
  public works: WorkEntity[];

  @OneToMany(() => PairEntity, (pair: PairEntity) => pair.discipline)
  public pairs: PairEntity[];
}
