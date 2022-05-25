import { Test, TestingModule } from '@nestjs/testing';
import { StudentWorkAnswerService } from './student-work-answer.service';

describe('StudentWorkAnswerService', () => {
  let service: StudentWorkAnswerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentWorkAnswerService],
    }).compile();

    service = module.get<StudentWorkAnswerService>(StudentWorkAnswerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
