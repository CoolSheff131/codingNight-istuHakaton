import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';
import { GroupEntity } from '../groups/entities/group.entity';

define(GroupEntity, (fkr: typeof faker) => {
  const group = new GroupEntity();

  group.name = '';
  return group;
});
