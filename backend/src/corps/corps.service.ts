import { Injectable } from '@nestjs/common';
import { CreateCorpsDto } from './dto/create-corps.dto';
import { UpdateCorpsDto } from './dto/update-corps.dto';

@Injectable()
export class CorpsService {
  create(createCorpsDto: CreateCorpsDto) {
    return 'This action adds a new corps';
  }

  findAll() {
    return `This action returns all corps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} corps`;
  }

  update(id: number, updateCorpsDto: UpdateCorpsDto) {
    return `This action updates a #${id} corps`;
  }

  remove(id: number) {
    return `This action removes a #${id} corps`;
  }
}
