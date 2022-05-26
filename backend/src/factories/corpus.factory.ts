import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';
import { CorpusEntity } from '../corps/entities/corps.entity';

define(CorpusEntity, (fkr: typeof faker) => {
  const corpus = new CorpusEntity();

  corpus.name = faker.word.noun();
  return corpus;
});
