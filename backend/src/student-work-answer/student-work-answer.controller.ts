import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentWorkAnswerService } from './student-work-answer.service';
import { CreateStudentWorkAnswerDto } from './dto/create-student-work-answer.dto';
import { UpdateStudentWorkAnswerDto } from './dto/update-student-work-answer.dto';

@Controller('student-work-answer')
export class StudentWorkAnswerController {
  constructor(private readonly studentWorkAnswerService: StudentWorkAnswerService) {}

  @Post()
  create(@Body() createStudentWorkAnswerDto: CreateStudentWorkAnswerDto) {
    return this.studentWorkAnswerService.create(createStudentWorkAnswerDto);
  }

  @Get()
  findAll() {
    return this.studentWorkAnswerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentWorkAnswerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentWorkAnswerDto: UpdateStudentWorkAnswerDto) {
    return this.studentWorkAnswerService.update(+id, updateStudentWorkAnswerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentWorkAnswerService.remove(+id);
  }
}
