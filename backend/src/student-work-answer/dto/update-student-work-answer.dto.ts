import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentWorkAnswerDto } from './create-student-work-answer.dto';

export class UpdateStudentWorkAnswerDto extends PartialType(CreateStudentWorkAnswerDto) {}
