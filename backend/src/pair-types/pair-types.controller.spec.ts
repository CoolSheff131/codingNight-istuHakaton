import { Test, TestingModule } from '@nestjs/testing';
import { PairTypesController } from './pair-types.controller';
import { PairTypesService } from './pair-types.service';

describe('PairTypesController', () => {
  let controller: PairTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PairTypesController],
      providers: [PairTypesService],
    }).compile();

    controller = module.get<PairTypesController>(PairTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
