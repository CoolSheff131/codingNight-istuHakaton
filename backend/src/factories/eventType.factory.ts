import { faker } from '@faker-js/faker';
import { define } from 'typeorm-seeding';
import { EventTypeEntity } from '../event-types/entities/event-type.entity';

define(EventTypeEntity, (fkr: typeof faker) => {
  const eventType = new EventTypeEntity();

  eventType.type = 0;
  return eventType;
});
