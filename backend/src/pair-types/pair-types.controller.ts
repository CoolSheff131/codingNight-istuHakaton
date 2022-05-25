import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PairTypesService } from './pair-types.service';
import { CreatePairTypeDto } from './dto/create-pair-type.dto';
import { UpdatePairTypeDto } from './dto/update-pair-type.dto';

@Controller('pair-types')
export class PairTypesController {
  constructor(private readonly pairTypesService: PairTypesService) {}

  @Post()
  create(@Body() createPairTypeDto: CreatePairTypeDto) {
    return this.pairTypesService.create(createPairTypeDto);
  }

  @Get()
  findAll() {
    return this.pairTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pairTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePairTypeDto: UpdatePairTypeDto) {
    return this.pairTypesService.update(+id, updatePairTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pairTypesService.remove(+id);
  }
}
