import { Module } from '@nestjs/common';
import { AuditoriesService } from './auditories.service';
import { AuditoriesController } from './auditories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditoryEntity } from './entities/auditory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditoryEntity])],
  controllers: [AuditoriesController],
  providers: [AuditoriesService],
})
export class AuditoriesModule {}
