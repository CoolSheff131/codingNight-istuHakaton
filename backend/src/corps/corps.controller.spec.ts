import { Test, TestingModule } from '@nestjs/testing';
import { CorpsController } from './corps.controller';
import { CorpsService } from './corps.service';

describe('CorpsController', () => {
  let controller: CorpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorpsController],
      providers: [CorpsService],
    }).compile();

    controller = module.get<CorpsController>(CorpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
