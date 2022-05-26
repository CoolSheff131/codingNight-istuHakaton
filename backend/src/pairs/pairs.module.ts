import { Module } from '@nestjs/common';
import { PairsService } from './pairs.service';
import { PairsController } from './pairs.controller';
import { PairEntity } from './entities/pair.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PairEntity])],
  controllers: [PairsController],
  providers: [PairsService],
})
export class PairsModule {}
