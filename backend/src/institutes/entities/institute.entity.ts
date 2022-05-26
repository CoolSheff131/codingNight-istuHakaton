import { GroupEntity } from '../../groups/entities/group.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InstituteEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => GroupEntity, (group: GroupEntity) => group.institute)
  groups: GroupEntity[];
}
