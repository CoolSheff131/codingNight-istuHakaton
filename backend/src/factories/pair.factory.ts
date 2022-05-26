import { faker } from '@faker-js/faker';
import { PairTypeEntity } from '../pair-types/entities/pair-type.entity';

import { define } from 'typeorm-seeding';
import { PairEntity } from '../pairs/entities/pair.entity';
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
define(PairEntity, (fkr: typeof faker) => {
  const pair = new PairEntity();

  pair.pairNumber = generateRandom();
  pair.dayNumber = generateRandom(1, 7);
  pair.weekBegining = new Date('2022-05-26');
  pair.subGroupNumber = 3;
  return pair;
});
