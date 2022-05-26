import { faker } from '@faker-js/faker';
import { PairTypeEntity } from '../pair-types/entities/pair-type.entity';

import { define } from 'typeorm-seeding';
// pairType.factory.ts
define(PairTypeEntity, (fkr: typeof faker) => {
  const pairType = new PairTypeEntity();

  pairType.type = 0;
  return pairType;
});
