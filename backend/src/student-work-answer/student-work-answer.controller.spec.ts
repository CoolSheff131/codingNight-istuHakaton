import { Test, TestingModule } from '@nestjs/testing';
import { StudentWorkAnswerController } from './student-work-answer.controller';
import { StudentWorkAnswerService } from './student-work-answer.service';

describe('StudentWorkAnswerController', () => {
  let controller: StudentWorkAnswerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentWorkAnswerController],
      providers: [StudentWorkAnswerService],
    }).compile();

    controller = module.get<StudentWorkAnswerController>(StudentWorkAnswerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
