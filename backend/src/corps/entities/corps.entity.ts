import { AuditoryEntity } from '../../auditories/entities/auditory.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CorpusEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;

  @OneToMany(() => AuditoryEntity, (post: AuditoryEntity) => post.corpus)
  public auditories: AuditoryEntity[];
}
