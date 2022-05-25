import { Module } from '@nestjs/common';
import { StudentWorkAnswerService } from './student-work-answer.service';
import { StudentWorkAnswerController } from './student-work-answer.controller';

@Module({
  controllers: [StudentWorkAnswerController],
  providers: [StudentWorkAnswerService]
})
export class StudentWorkAnswerModule {}
