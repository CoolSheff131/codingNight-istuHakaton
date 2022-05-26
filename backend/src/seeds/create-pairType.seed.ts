import { PairTypeEntity } from '../pair-types/entities/pair-type.entity';
import { Factory, Seeder } from 'typeorm-seeding';
import { EventTypeEntity } from '../event-types/entities/event-type.entity';
import { GroupEntity } from '../groups/entities/group.entity';
import { InstituteEntity } from '../institutes/entities/institute.entity';
import { CorpusEntity } from '../corps/entities/corps.entity';
import { AuditoryEntity } from '../auditories/entities/auditory.entity';
import { TeacherEntity } from '../teachers/entities/teacher.entity';
import { DisciplineEntity } from '../disciplines/entities/discipline.entity';
import { StudentEntity } from '../students/entities/student.entity';
import { group } from 'console';
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

function getRandomElementsFromArray<T>(myArray: T[], count = 2) {
  const arr = myArray.sort(() => Math.random() - Math.random()).slice(0, count);
  return arr;
}

function getRandomElementFromArray<T>(array: T[]) {
  return array[Math.floor(Math.random() * array.length)];
}

export default class CreatePairType implements Seeder {
  public async run(factory: Factory): Promise<any> {
    const pairType1 = await factory(PairTypeEntity)().create({ type: 1 });
    const pairType2 = await factory(PairTypeEntity)().create({ type: 2 });
    const pairType3 = await factory(PairTypeEntity)().create({ type: 3 });
    const allPairTypes = [pairType1, pairType2, pairType3];
    console.log('PAIR TYPES CREATED');

    const eventType1 = await factory(EventTypeEntity)().create({ type: 0 });
    const eventType2 = await factory(EventTypeEntity)().create({ type: 1 });
    const eventType3 = await factory(EventTypeEntity)().create({ type: 3 });
    const eventType4 = await factory(EventTypeEntity)().create({ type: 4 });
    const allEventTypes = [eventType1, eventType2, eventType3, eventType4];
    console.log('EVENT TYPES CREATED');

    const institute1 = await factory(InstituteEntity)().create({
      name: 'ИАСИД',
    });
    const institute2 = await factory(InstituteEntity)().create({
      name: 'ИИТИАД',
    });
    console.log('INSTITUTES CREATED');

    const discipline1 = await factory(DisciplineEntity)().create({
      name: 'Собирание оригами',
    });
    const discipline2 = await factory(DisciplineEntity)().create({
      name: 'Уборка территори',
    });
    const discipline3 = await factory(DisciplineEntity)().create({
      name: 'Игры на музыкальных инструментах',
    });
    const discipline4 = await factory(DisciplineEntity)().create({
      name: 'Методы улавливания полезной информации',
    });
    const discipline5 = await factory(DisciplineEntity)().create({
      name: 'Обустраивание личного пространства',
    });
    const discipline6 = await factory(DisciplineEntity)().create({
      name: 'Основы собирания табуреток',
    });
    const discipline7 = await factory(DisciplineEntity)().create({
      name: 'Плетение фенечек',
    });
    const discipline8 = await factory(DisciplineEntity)().create({
      name: 'Способы выпутывания из безвыходных ситуаций',
    });

    const allDisciplines = [
      discipline1,
      discipline2,
      discipline3,
      discipline4,
      discipline5,
      discipline6,
      discipline7,
      discipline8,
    ];
    console.log('DISCIPLINES CREATED');

    const group1 = await factory(GroupEntity)().create({
      name: 'Муми-тролли',
      institute: institute1,
      course: 1,
      disciplines: getRandomElementsFromArray<DisciplineEntity>(allDisciplines),
    });
    const group2 = await factory(GroupEntity)().create({
      name: 'Снорки',
      institute: institute2,
      course: 2,
      disciplines: getRandomElementsFromArray<DisciplineEntity>(allDisciplines),
    });
    const group3 = await factory(GroupEntity)().create({
      name: 'Мумрики',
      institute: institute2,
      course: 3,
      disciplines: getRandomElementsFromArray<DisciplineEntity>(allDisciplines),
    });
    const allGroups = [group1, group2, group3];
    console.log('GROUPS CREATED');

    const corpus1 = await factory(CorpusEntity)().create({
      name: 'Корпус А', //'Обсерватория',
    });
    // const corpus2 = await factory(CorpusEntity)().create({
    //   name: 'Зимний сад',
    // });
    // const corpus3 = await factory(CorpusEntity)().create({
    //   name: 'Грот',
    // });
    // const corpus4 = await factory(CorpusEntity)().create({
    //   name: 'Чердак',
    // });
    // const corpus5 = await factory(CorpusEntity)().create({
    //   name: 'Танцплощадка',
    // });
    // const corpus6 = await factory(CorpusEntity)().create({
    //   name: 'У кустов сирени',
    // });
    const allCorps = [corpus1]; //, corpus2, corpus3, corpus4, corpus5, corpus6];
    console.log('CORPS CREATED');
    const auditoryName = [
      'Обсерватория',
      'Зимний сад',
      'Грот',
      'Танцплощадка',
      'У кустов сирени',
    ];

    const allAuditories = [];
    let number = 0;
    for (const name of auditoryName) {
      const auditory = await factory(AuditoryEntity)().create({
        floor: 0,
        corpus: allCorps[Math.floor(Math.random() * allCorps.length)],
        number,
        name,
      });
      number++;
      allAuditories.push(auditory);
    }
    console.log('AUDITORIES CREATED');

    const teacher1 = await factory(TeacherEntity)().create({
      surname: 'Шуссель',
    });
    const teacher2 = await factory(TeacherEntity)().create({
      surname: 'Муми-мама',
    });
    const teacher3 = await factory(TeacherEntity)().create({
      surname: 'Тюлиппа',
    });
    const teacher4 = await factory(TeacherEntity)().create({
      surname: 'Морра',
    });
    const teacher5 = await factory(TeacherEntity)().create({
      surname: 'Тофсла',
    });
    const teacher6 = await factory(TeacherEntity)().create({
      surname: 'Юксаре',
    });
    const teacher7 = await factory(TeacherEntity)().create({
      surname: 'Морра',
    });
    const teacher8 = await factory(TeacherEntity)().create({
      surname: 'Туу-тикки',
    });
    const teacher9 = await factory(TeacherEntity)().create({
      surname: 'Ти-ти-у-у',
    });
    const teacher10 = await factory(TeacherEntity)().create({
      surname: 'Юксаре',
    });

    const allTeachers = [
      teacher1,
      teacher2,
      teacher3,
      teacher4,
      teacher5,
      teacher6,
      teacher7,
      teacher8,
      teacher9,
      teacher10,
    ];
    console.log('TEACHERS CREATED');

    // const student1 = await factory(StudentEntity)().create({
    //   group: allGroups[Math.floor(Math.random() * allGroups.length)],
    // });

    const students = await factory(StudentEntity)()
      .map(async (student: StudentEntity) => {
        student.group = allGroups[Math.floor(Math.random() * allGroups.length)];
        student.subgroupNumber = 1;
        return student;
      })
      .createMany(50);

    console.log('STUDENTS CREATED');
    const allPairs = await factory(PairEntity)()
      .map(async (pair: PairEntity) => {
        pair.weekBegining = new Date('2022-05-26');
        pair.teachers = getRandomElementsFromArray<TeacherEntity>(allTeachers);
        pair.groups = getRandomElementsFromArray<GroupEntity>(allGroups);
        pair.auditories =
          getRandomElementsFromArray<AuditoryEntity>(allAuditories);
        pair.pairType = getRandomElementFromArray<PairTypeEntity>(allPairTypes);
        pair.discipline =
          getRandomElementFromArray<DisciplineEntity>(allDisciplines);
        pair.subGroupNumber = 3;
        return pair;
      })
      .createMany(25);

    console.log('PAIRS CREATED');

    const allEventMer = await factory(EventEntity)()
      .map(async (event: EventEntity) => {
        event.teachers = getRandomElementsFromArray<TeacherEntity>(allTeachers);
        event.groups = getRandomElementsFromArray<GroupEntity>(allGroups);
        event.auditories =
          getRandomElementsFromArray<AuditoryEntity>(allAuditories);

        event.eventType = eventType1;
        return event;
      })
      .createMany(25);
    console.log('EVENT MER CREATED');
    const allEventProj = await factory(EventEntity)()
      .map(async (event: EventEntity) => {
        event.teachers = getRandomElementsFromArray<TeacherEntity>(allTeachers);
        event.groups = getRandomElementsFromArray<GroupEntity>(allGroups);
        event.auditories =
          getRandomElementsFromArray<AuditoryEntity>(allAuditories);

        event.eventType = eventType2;
        return event;
      })
      .createMany(25);
    console.log('EVENT PROJ CREATED');

    const allEventType3_4 = await factory(EventEntity)().create({
      teachers: getRandomElementsFromArray<TeacherEntity>(allTeachers),
      groups: getRandomElementsFromArray<GroupEntity>(allGroups),
      auditories: getRandomElementsFromArray<AuditoryEntity>(allAuditories),
      eventType: getRandomElementFromArray<EventTypeEntity>([
        eventType3,
        eventType4,
      ]),
      relatedQueriesIds: getRandomElementsFromArray<number>([
        ...allEventMer.map((event) => event.id),
        ...allEventProj.map((event) => event.id),
      ]),
      pair: allPairs[0],
    });
    console.log('EVENT 3 4 CREATED');
  }
}
