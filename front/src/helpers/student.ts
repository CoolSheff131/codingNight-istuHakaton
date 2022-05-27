import { Student } from '../models/Student';

export const saveStudent = (student: Student) => {
  const studentJSON = JSON.stringify(student);
  localStorage.setItem('student', studentJSON);
};

export const getStudent = (): Student | undefined => {
  const studJSON = localStorage.getItem('student');
  if (studJSON === null) {
    return undefined;
  }
  return JSON.parse(studJSON);
};

export const deleteStudent = () => {
  localStorage.removeItem('student');
};
