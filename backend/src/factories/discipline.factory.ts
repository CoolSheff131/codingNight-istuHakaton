import { faker } from '@faker-js/faker';
import { PairTypeEntity } from '../pair-types/entities/pair-type.entity';

import { define } from 'typeorm-seeding';
import { DisciplineEntity } from '../disciplines/entities/discipline.entity';
// pairType.factory.ts
define(DisciplineEntity, (fkr: typeof faker) => {
  const pairType = new DisciplineEntity();

  pairType.name = faker.animal.bear();
  return pairType;
});
