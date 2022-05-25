import { Injectable } from '@nestjs/common';
import { CreateStudentWorkAnswerDto } from './dto/create-student-work-answer.dto';
import { UpdateStudentWorkAnswerDto } from './dto/update-student-work-answer.dto';

@Injectable()
export class StudentWorkAnswerService {
  create(createStudentWorkAnswerDto: CreateStudentWorkAnswerDto) {
    return 'This action adds a new studentWorkAnswer';
  }

  findAll() {
    return `This action returns all studentWorkAnswer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} studentWorkAnswer`;
  }

  update(id: number, updateStudentWorkAnswerDto: UpdateStudentWorkAnswerDto) {
    return `This action updates a #${id} studentWorkAnswer`;
  }

  remove(id: number) {
    return `This action removes a #${id} studentWorkAnswer`;
  }
}
