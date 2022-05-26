import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePairDto } from './dto/create-pair.dto';
import { UpdatePairDto } from './dto/update-pair.dto';
import { PairEntity } from './entities/pair.entity';

@Injectable()
export class PairsService {
  constructor(
    @InjectRepository(PairEntity)
    private pairRepository: Repository<PairEntity>,
  ) {}

  create(createPairDto: CreatePairDto) {
    return 'This action adds a new pair';
  }

  findAll() {
    return this.pairRepository.find();
  }

  async findInDay(dayDate: string) {
    const pairs = await this.pairRepository.find({
      relations: ['auditories', 'groups', 'teachers', 'discipline', 'pairType'],
    });
    const pairsInDay = this.filterByDay(dayDate, pairs);
    return this.convertToDto(pairsInDay);
  }

  async findInDayGroup(groupId: string, dayDate: string) {
    const pairs = await this.pairRepository.find({
      where: {
        groups: { id: +groupId },
      },
      relations: ['auditories', 'groups', 'teachers', 'discipline', 'pairType'],
    });
    const pairsInDay = this.filterByDay(dayDate, pairs);
    return this.convertToDto(pairsInDay);
  }
  async findInDayTeacher(teacherId: string, dayDate: string) {
    const pairs = await this.pairRepository.find({
      where: {
        teachers: { id: +teacherId },
      },
      relations: ['auditories', 'groups', 'teachers', 'discipline', 'pairType'],
    });
    const pairsInDay = this.filterByDay(dayDate, pairs);
    return this.convertToDto(pairsInDay);
  }
  async findInDayAuditory(auditoryId: string, dayDate: string) {
    const pairs = await this.pairRepository.find({
      where: {
        auditories: { id: +auditoryId },
      },
      relations: ['auditories', 'groups', 'teachers', 'discipline', 'pairType'],
    });
    const pairsInDay = this.filterByDay(dayDate, pairs);
    return this.convertToDto(pairsInDay);
  }

  private filterByDay(dayDate: string, pairs: PairEntity[]) {
    const targetDate = new Date(dayDate);
    const datesAreOnSameDay = (first, second) =>
      first.getFullYear() === second.getFullYear() &&
      first.getMonth() === second.getMonth() &&
      first.getDate() === second.getDate();

    const addDays = function (date: Date, days) {
      var date = new Date(date.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };

    return pairs.filter((pair) => {
      const shiftDay = pair.dayNumber - 1;
      const pairDate = addDays(pair.weekBegining, shiftDay);
      return datesAreOnSameDay(targetDate, pairDate);
    });
  }

  private convertToDto(pairs: PairEntity[]) {
    return {
      '1': pairs.filter((pair) => pair.pairNumber === 1),
      '2': pairs.filter((pair) => pair.pairNumber === 2),
      '3': pairs.filter((pair) => pair.pairNumber === 3),
      '4': pairs.filter((pair) => pair.pairNumber === 4),
      '5': pairs.filter((pair) => pair.pairNumber === 5),
      '6': pairs.filter((pair) => pair.pairNumber === 6),
      '7': pairs.filter((pair) => pair.pairNumber === 7),
      '8': pairs.filter((pair) => pair.pairNumber === 8),
    };
  }

  update(id: number, updatePairDto: UpdatePairDto) {
    return `This action updates a #${id} pair`;
  }

  remove(id: number) {
    return `This action removes a #${id} pair`;
  }
}
