import { Student } from './Student';
import { Work } from './Work';

export interface StudentWorkAnswer {
  id: number;
  student: Student;
  work: Work;
  description: string;
  fileUrl: string;
  mark: null | number;
}
