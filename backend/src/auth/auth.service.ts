import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentEntity } from 'src/students/entities/student.entity';
import { StudentsService } from 'src/students/students.service';

//import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: StudentsService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByCond({
      email,
      password,
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  generateJwtToken(data: { id: number; email: string }) {
    const payload = { email: data.email, sub: data.id };
    return this.jwtService.sign(payload);
  }
  async login(user: StudentEntity) {
    const { password, ...userData } = user;
    return {
      ...userData,
      token: this.generateJwtToken(userData),
    };
  }

  // async register(dto: CreateUserDto) {
  //   try {
  //     const { password, ...user } = await this.userService.create({
  //       email: dto.email,
  //       fullname: dto.fullname,
  //       password: dto.password,
  //     });
  //     return {
  //       ...user,
  //       token: this.generateJwtToken(user),
  //     };
  //   } catch (error) {
  //     throw new ForbiddenException(error);
  //   }
  // }
}
