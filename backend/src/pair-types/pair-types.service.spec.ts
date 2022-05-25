import { Test, TestingModule } from '@nestjs/testing';
import { PairTypesService } from './pair-types.service';

describe('PairTypesService', () => {
  let service: PairTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PairTypesService],
    }).compile();

    service = module.get<PairTypesService>(PairTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
