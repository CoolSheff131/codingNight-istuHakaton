import { faker } from '@faker-js/faker';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { define } from 'typeorm-seeding';
import { GroupEntity } from '../groups/entities/group.entity';

import { StudentEntity } from '../students/entities/student.entity';

define(StudentEntity, (fkr: typeof faker) => {
  const student = new StudentEntity();

  student.login = faker.word.noun();
  student.surname = faker.name.lastName();
  student.firstName = faker.name.firstName();
  student.patronymic = faker.name.middleName();
  student.email = faker.internet.email();
  student.login = faker.internet.userName();
  student.password = faker.internet.password();
  student.avatar_url = faker.internet.avatar();
  student.isStarosta = false;
  student.subgroupNumber = 1;
  return student;
});
