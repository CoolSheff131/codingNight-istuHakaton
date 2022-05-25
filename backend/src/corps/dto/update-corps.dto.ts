import { PartialType } from '@nestjs/mapped-types';
import { CreateCorpsDto } from './create-corps.dto';

export class UpdateCorpsDto extends PartialType(CreateCorpsDto) {}
