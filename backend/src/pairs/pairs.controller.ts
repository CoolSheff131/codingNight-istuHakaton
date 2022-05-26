import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PairsService } from './pairs.service';
import { CreatePairDto } from './dto/create-pair.dto';
import { UpdatePairDto } from './dto/update-pair.dto';

@Controller('pairs')
export class PairsController {
  constructor(private readonly pairsService: PairsService) {}

  @Post()
  create(@Body() createPairDto: CreatePairDto) {
    return this.pairsService.create(createPairDto);
  }

  @Get()
  findAll() {
    return this.pairsService.findAll();
  }

  @Get('group/:groupId/:dayDate')
  findByGroup(
    @Param('dayDate') dayDate: string,
    @Param('groupId') groupId: string,
  ) {
    return this.pairsService.findInDayGroup(groupId, dayDate);
  }

  @Get('auditory/:groupId/:dayDate')
  findByAuditory(
    @Param('dayDate') dayDate: string,
    @Param('groupId') groupId: string,
  ) {
    return this.pairsService.findInDayAuditory(groupId, dayDate);
  }

  @Get('teacher/:groupId/:dayDate')
  findByTeacher(
    @Param('dayDate') dayDate: string,
    @Param('groupId') groupId: string,
  ) {
    return this.pairsService.findInDayTeacher(groupId, dayDate);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePairDto: UpdatePairDto) {
    return this.pairsService.update(+id, updatePairDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pairsService.remove(+id);
  }
}
