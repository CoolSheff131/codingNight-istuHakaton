import { Module } from '@nestjs/common';
import { CorpsService } from './corps.service';
import { CorpsController } from './corps.controller';

@Module({
  controllers: [CorpsController],
  providers: [CorpsService]
})
export class CorpsModule {}
