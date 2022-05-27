import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { AuditoryEntity } from './auditories/entities/auditory.entity';
import { GroupEntity } from './groups/entities/group.entity';
import { TeacherEntity } from './teachers/entities/teacher.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(GroupEntity)
    private groupRepository: Repository<GroupEntity>,
    @InjectRepository(AuditoryEntity)
    private auditoryRepository: Repository<AuditoryEntity>,
    @InjectRepository(TeacherEntity)
    private teacherRepository: Repository<TeacherEntity>,
  ) {}

  async search(title: string) {
    const groups = await this.groupRepository.find({
      where: { name: Like(`%${title}%`) },
    });
    const teachers = await this.teacherRepository.find({
      where: { surname: Like(`%${title}%`) },
    });
    const auditories = await this.auditoryRepository.find({
      where: { name: Like(`%${title}%`) },
    });

    groups.forEach((group) => {
      group['url'] = `schedule/group/${group.id}`;
      group['type'] = 'Группы';
    });
    teachers.forEach((group) => {
      group['url'] = `schedule/teacher/${group.id}`;
      group['name'] = group.surname;
      group['type'] = 'Преподаватели';
    });
    auditories.forEach((group) => {
      group['url'] = `schedule/auditory/${group.id}`;
      group['type'] = 'Аудитории';
    });
    return [...groups, ...teachers, ...auditories];
  }
  getHello(): string {
    return 'Hello World!';
  }
}
