import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CorpsService } from './corps.service';
import { CreateCorpsDto } from './dto/create-corps.dto';
import { UpdateCorpsDto } from './dto/update-corps.dto';

@Controller('corps')
export class CorpsController {
  constructor(private readonly corpsService: CorpsService) {}

  @Post()
  create(@Body() createCorpsDto: CreateCorpsDto) {
    return this.corpsService.create(createCorpsDto);
  }

  @Get()
  findAll() {
    return this.corpsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.corpsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCorpsDto: UpdateCorpsDto) {
    return this.corpsService.update(+id, updateCorpsDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.corpsService.remove(+id);
  }
}
