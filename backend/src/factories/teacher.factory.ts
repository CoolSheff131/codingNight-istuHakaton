import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';
import { GroupEntity } from '../groups/entities/group.entity';
import { TeacherEntity } from '../teachers/entities/teacher.entity';

define(TeacherEntity, (fkr: typeof faker) => {
  const teacher = new TeacherEntity();

  teacher.login = faker.word.noun();
  teacher.surname = faker.name.lastName();
  teacher.firstName = faker.name.firstName();
  teacher.patronymic = faker.name.middleName();
  teacher.email = faker.internet.email();
  teacher.login = faker.internet.userName();
  teacher.password = faker.internet.password();
  teacher.avatar_url = faker.internet.avatar();
  return teacher;
});
