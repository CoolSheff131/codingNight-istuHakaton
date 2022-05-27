import axios from 'axios';
import { eventFiltersToSearchParams, pairFiltersToSearchParams } from '../helpers/query';
import { Auditory } from '../models/Auditory';
import { EventFilters } from '../models/Event';
import { Group } from '../models/Group';
import { GroupList } from '../models/GroupList';
import { Institute } from '../models/Institute';
import { Pair, PairFilters } from '../models/Pair';
import { PairList } from '../models/PairList';
import { Teacher } from '../models/Teacher';
import { Week } from '../models/Week';
import IApi from './IApi';

export class Api {
  private readonly BASE_URL = 'http://localhost:8000';
  private readonly axios = axios.create({ baseURL: this.BASE_URL });

  async getGroupsInInstitute(instituteId: number): Promise<GroupList> {
    return this.axios.get<GroupList>(`/groups/institute/${instituteId}`).then((data) => data.data);
  }
  async getAllInstitutes(): Promise<Institute[]> {
    return this.axios.get<Institute[]>('/institutes').then((data) => data.data);
  }
  async getAllAuditory(): Promise<Auditory[]> {
    return this.axios.get<Auditory[]>('/auditories').then((data) => data.data);
  }
  async getAllTeachers(): Promise<Teacher[]> {
    return this.axios.get<Teacher[]>('/teachers').then((data) => data.data);
  }

  async getWeek(weekBeginingDate: string): Promise<Week> {
    return this.axios.get<Week>(`/week/${weekBeginingDate}`).then((data) => data.data);
  }

  async getGroupPairsListInDay(groupId: string, day: string): Promise<PairList> {
    return this.axios
      .get<PairList>('/pairs/group/' + groupId + '/' + day)
      .then((data) => data.data);
  }

  async getAuditoryPairsListInDay(auditoryId: string, day: string): Promise<PairList> {
    return this.axios
      .get<PairList>('/pairs/auditory/' + auditoryId + '/' + day)
      .then((data) => data.data);
  }

  async getTeacherPairsListInDay(teacherId: string, day: string): Promise<PairList> {
    return this.axios
      .get<PairList>('/pairs/teacher/' + teacherId + '/' + day)
      .then((data) => data.data);
  }

  async filterEventList(filters: EventFilters): Promise<Event[]> {
    const params = eventFiltersToSearchParams(filters);
    return this.axios.get<Event[]>('/event', { params }).then((data) => data.data);
  }

  async getGroup(id: string): Promise<Group> {
    return this.axios.get<Group>('/groups/' + id).then((data) => data.data);
  }
  async getAuditory(id: string): Promise<Auditory> {
    return this.axios.get<Auditory>('/auditories/' + id).then((data) => data.data);
  }
  async getTeacher(id: string): Promise<Teacher> {
    return this.axios.get<Teacher>('/teachers/' + id).then((data) => data.data);
  }

  async search(title: string): Promise<SearchOption[]> {
    return this.axios.get<SearchOption[]>('/search/' + title).then((data) => data.data);
  }
}

export interface SearchOption {
  name: string;
  url: string;
  type: string;
}

export const ApiInstance = new Api();
