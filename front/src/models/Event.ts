import { Auditory } from './Auditory';
import { EventType } from './EventType';
import { Group } from './Group';
import { Pair } from './Pair';
import { PairNumber } from './PairNumber';
import { Teacher } from './Teacher';

export interface Event {
  id: number;
  dt: string;
  pair: PairNumber;
  description: string;
  groups: Group[];
  teachers: Teacher[];
  auditories: Auditory[];
  type: EventType;
  relatedQueries: Event[];
  affectedSchedule: Pair;
}
