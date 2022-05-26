import { EventEntity } from '../../events/entities/event.entity';
import { PairEntity } from '../../pairs/entities/pair.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class TeacherEntity {
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
  @Column()
  avatar_url: string;

  // RELATIONS
  @ManyToMany(() => EventEntity, (event: EventEntity) => event.teachers)
  public events: EventEntity[];

  @ManyToMany(() => PairEntity, (pair: PairEntity) => pair.teachers)
  public pairs: PairEntity[];
}
