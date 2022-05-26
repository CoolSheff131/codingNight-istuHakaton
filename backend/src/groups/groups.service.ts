import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupEntity } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(GroupEntity)
    private groupRepository: Repository<GroupEntity>,
  ) {}

  async findByInstitute(instituteId: string) {
    const groups = await this.groupRepository.find({
      where: { institute: { id: +instituteId } },
    });

    return {
      '1': groups.filter((group) => group.course === 1),
      '2': groups.filter((group) => group.course === 2),
      '3': groups.filter((group) => group.course === 3),
      '4': groups.filter((group) => group.course === 4),
      '5': groups.filter((group) => group.course === 5),
      '6': groups.filter((group) => group.course === 6),
    };
  }
  create(createGroupDto: CreateGroupDto) {
    return 'This action adds a new group';
  }

  findAll() {
    return `This action returns all groups`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
