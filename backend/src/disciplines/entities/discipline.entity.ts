import { GroupEntity } from 'src/groups/entities/group.entity';
import { PairEntity } from 'src/pairs/entities/pair.entity';
import { WorkEntity } from 'src/works/entities/work.entity';
import {
  Column,
  Entity,
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
