import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentEntity } from './students/entities/student.entity';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminsModule } from './admins/admins.module';
import { GroupsModule } from './groups/groups.module';
import { InstitutesModule } from './institutes/institutes.module';
import { TeachersModule } from './teachers/teachers.module';
import { CorpsModule } from './corps/corps.module';
import { AuditoriesModule } from './auditories/auditories.module';
import { DisciplinesModule } from './disciplines/disciplines.module';
import { PairsModule } from './pairs/pairs.module';
import { EventsModule } from './events/events.module';
import { EventTypesModule } from './event-types/event-types.module';
import { PairTypesModule } from './pair-types/pair-types.module';
import { StudentWorkAnswerModule } from './student-work-answer/student-work-answer.module';
import { WorksModule } from './works/works.module';
import { StudentWorkAnswerEntity } from './student-work-answer/entities/student-work-answer.entity';
import { AdminEntity } from './admins/entities/admin.entity';
import { GroupEntity } from './groups/entities/group.entity';
import { InstituteEntity } from './institutes/entities/institute.entity';
import { TeacherEntity } from './teachers/entities/teacher.entity';
import { CorpusEntity } from './corps/entities/corps.entity';
import { AuditoryEntity } from './auditories/entities/auditory.entity';
import { DisciplineEntity } from './disciplines/entities/discipline.entity';
import { PairEntity } from './pairs/entities/pair.entity';
import { EventEntity } from './events/entities/event.entity';
import { EventTypeEntity } from './event-types/entities/event-type.entity';
import { PairTypeEntity } from './pair-types/entities/pair-type.entity';
import { WorkEntity } from './works/entities/work.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', //'postgres-db',
      port: 5432,
      username: 'texteditor',
      password: 'texteditor',
      database: 'schedule',
      entities: [
        StudentEntity,
        AdminEntity,
        GroupEntity,
        InstituteEntity,
        TeacherEntity,
        CorpusEntity,
        AuditoryEntity,
        DisciplineEntity,
        PairEntity,
        EventEntity,
        EventTypeEntity,
        PairTypeEntity,
        WorkEntity,
        StudentWorkAnswerEntity,
      ],
      synchronize: true,
    }),
    StudentsModule,
    AdminsModule,
    GroupsModule,
    InstitutesModule,
    TeachersModule,
    CorpsModule,
    AuditoriesModule,
    DisciplinesModule,
    PairsModule,
    EventsModule,
    EventTypesModule,
    PairTypesModule,
    WorksModule,
    StudentWorkAnswerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
