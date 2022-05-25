import { Module } from '@nestjs/common';
import { PairTypesService } from './pair-types.service';
import { PairTypesController } from './pair-types.controller';

@Module({
  controllers: [PairTypesController],
  providers: [PairTypesService]
})
export class PairTypesModule {}
