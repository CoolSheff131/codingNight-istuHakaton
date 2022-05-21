import { Auditory } from './Auditory';
import { Day } from './Day';
import { Discipline } from './Descipline';
import { Group } from './Group';
import { PairNumber } from './PairNumber';
import { PairType } from './PairType';
import { Teacher } from './Teacher';

export interface Pair {
  id: number;
  type: PairType; //тип, 1 -- лекция, 2 -- практика, 3 -- лаба
  day: Day; // день, от 1 до 7, 1 -- понедельник, 2 -- вторник и т.д.
  pair: PairNumber; //номер пары, от 1 до 8
  weekBegining: string;
  groups: Group[];
  subgroup_number: number; //номер подгруппы, если занятие имеет тип 3, то в groups будет ровно одна группа, а 1 означает, что на занятие придет только первая половина группы 2 означает, что на занятие придет только вторая половина группы
  discipline: Discipline;
  teachers: Teacher[];
  auditories: Auditory[];
}

export interface PairFilters {
  pairType?: number[]; // массив id
  discipline?: number[]; // массив id
  teacher?: number[]; // массив id
  group?: number[]; // Массив  id
  auditory?: number[]; // Массив  id
  week_begining?: string;
}
