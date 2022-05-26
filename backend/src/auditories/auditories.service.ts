import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAuditoryDto } from './dto/create-auditory.dto';
import { UpdateAuditoryDto } from './dto/update-auditory.dto';
import { AuditoryEntity } from './entities/auditory.entity';

@Injectable()
export class AuditoriesService {
  constructor(
    @InjectRepository(AuditoryEntity)
    private auditoryRepository: Repository<AuditoryEntity>,
  ) {}

  create(createAuditoryDto: CreateAuditoryDto) {
    return 'This action adds a new auditory';
  }

  findAll() {
    return this.auditoryRepository.find({ relations: ['corpus'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} auditory`;
  }

  update(id: number, updateAuditoryDto: UpdateAuditoryDto) {
    return `This action updates a #${id} auditory`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditory`;
  }
}
