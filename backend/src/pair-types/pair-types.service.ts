import { Injectable } from '@nestjs/common';
import { CreatePairTypeDto } from './dto/create-pair-type.dto';
import { UpdatePairTypeDto } from './dto/update-pair-type.dto';

@Injectable()
export class PairTypesService {
  create(createPairTypeDto: CreatePairTypeDto) {
    return 'This action adds a new pairType';
  }

  findAll() {
    return `This action returns all pairTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pairType`;
  }

  update(id: number, updatePairTypeDto: UpdatePairTypeDto) {
    return `This action updates a #${id} pairType`;
  }

  remove(id: number) {
    return `This action removes a #${id} pairType`;
  }
}
