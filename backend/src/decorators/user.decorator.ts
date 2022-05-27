import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { StudentEntity } from 'src/students/entities/student.entity';

export const Student = createParamDecorator(
  (_: unknown, ctx: ExecutionContext): StudentEntity => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.id;
  },
);
