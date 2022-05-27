import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from 'src/notes/entities/note.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { StudentEntity } from './entities/student.entity';

@Injectable()
export class StudentsService {
  async findAllNotes(studentId: number) {
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });
    if (student) {
      return new NotFoundException();
    }
    return student.notes;
  }

  async createNote(studentId: number, title: string, content: string) {
    // const student = await this.studentRepository.findOne({
    //   where: { id: studentId },
    // });
    // const note = new NoteEntity()
    // note.title = title
    // note.content = content
    // student.notes.push(note)
    // student.notes.
    // if (student) {
    //   return new NotFoundException();
    // }
    // return student.notes;
  }
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return 'This action adds a new student';
  }

  findAll() {
    return `This action returns all students`;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  async findByCond(cond: LoginUserDto) {
    const find = await this.studentRepository.findOne({
      where: { email: cond.email, password: cond.password },
    });
    if (!find) {
      throw new NotFoundException('Пользователь не найден');
    }
    return find;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
