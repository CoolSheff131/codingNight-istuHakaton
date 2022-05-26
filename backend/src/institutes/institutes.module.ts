import { Module } from '@nestjs/common';
import { InstitutesService } from './institutes.service';
import { InstitutesController } from './institutes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstituteEntity } from './entities/institute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InstituteEntity])],
  controllers: [InstitutesController],
  providers: [InstitutesService],
})
export class InstitutesModule {}
