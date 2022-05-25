import { AuditoryEntity } from 'src/auditories/entities/auditory.entity';
import { EventEntity } from 'src/events/entities/event.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EventTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: number;
  @OneToMany(() => EventEntity, (event: EventEntity) => event.eventType)
  public events: EventEntity[];
}
