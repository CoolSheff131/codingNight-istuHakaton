import { Auditory } from '../models/Auditory';
import { EventFilters } from '../models/Event';
import { Group } from '../models/Group';
import { GroupList } from '../models/GroupList';
import { Institute } from '../models/Institute';
import { Pair, PairFilters } from '../models/Pair';
import { PairList } from '../models/PairList';
import { Teacher } from '../models/Teacher';
import { Week } from '../models/Week';

export default abstract class IApi {
  abstract getGroupsInInstitute(instituteId: number): Promise<GroupList>;
  abstract getAllInstitutes(): Promise<Institute[]>;
  abstract getAllAuditory(): Promise<Auditory[]>;
  abstract getAllTeachers(): Promise<Teacher[]>;
  abstract getWeek(weekBeginingDate: string): Promise<Week>;
  abstract getGroupPairsListInDay(day: string): Promise<PairList>;
  abstract filterEventList(filters: EventFilters): Promise<Event[]>;
}
