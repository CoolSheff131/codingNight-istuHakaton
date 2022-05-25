import { Group } from './Group';

export interface Student {
  id: number;
  surname: string;
  firstName: string;
  patronymic: string;
  email: string;
  login: string;
  password: string;
  isStarosta: boolean;
  group: Group;
  subgroupNumber: number;
  avatarUrl: string;
}
