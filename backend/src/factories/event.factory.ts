import { faker } from '@faker-js/faker';
import { PairTypeEntity } from '../pair-types/entities/pair-type.entity';

import { define } from 'typeorm-seeding';
import { PairEntity } from '../pairs/entities/pair.entity';
import { EventEntity } from '../events/entities/event.entity';
function generateRandom(min = 1, max = 8) {
  // find diff
  let difference = max - min;

  // generate random number
  let rand = Math.random();

  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}
define(EventEntity, (fkr: typeof faker) => {
  const event = new EventEntity();

  event.dt = faker.date.between('2022-05-23', '2022-05-28');
  event.pairNumber = generateRandom();
  event.description = faker.company.catchPhrase();

  return event;
});
