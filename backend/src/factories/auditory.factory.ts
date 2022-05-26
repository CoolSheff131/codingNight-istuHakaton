import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';
import { GroupEntity } from '../groups/entities/group.entity';
import { AuditoryEntity } from '../auditories/entities/auditory.entity';

define(AuditoryEntity, (fkr: typeof faker) => {
  const auditory = new AuditoryEntity();

  auditory.floor = 0;
  return auditory;
});
