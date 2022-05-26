import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';

define(InstituteEntity, (fkr: typeof faker) => {
  const institute = new InstituteEntity();

  institute.name = faker.word.noun();
  return institute;
});
