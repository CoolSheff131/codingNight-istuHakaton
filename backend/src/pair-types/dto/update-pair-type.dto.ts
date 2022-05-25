import { PartialType } from '@nestjs/mapped-types';
import { CreatePairTypeDto } from './create-pair-type.dto';

export class UpdatePairTypeDto extends PartialType(CreatePairTypeDto) {}
