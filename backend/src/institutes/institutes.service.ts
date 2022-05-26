import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInstituteDto } from './dto/create-institute.dto';
import { UpdateInstituteDto } from './dto/update-institute.dto';
import { InstituteEntity } from './entities/institute.entity';

@Injectable()
export class InstitutesService {
  constructor(
    @InjectRepository(InstituteEntity)
    private instituteRepository: Repository<InstituteEntity>,
  ) {}

  create(createInstituteDto: CreateInstituteDto) {
    return 'This action adds a new institute';
  }

  findAll() {
    return this.instituteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} institute`;
  }

  update(id: number, updateInstituteDto: UpdateInstituteDto) {
    return `This action updates a #${id} institute`;
  }

  remove(id: number) {
    return `This action removes a #${id} institute`;
  }
}
