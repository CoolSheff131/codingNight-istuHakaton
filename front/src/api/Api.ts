import axios from 'axios';
import { eventFiltersToSearchParams, pairFiltersToSearchParams } from '../helpers/query';
import { Auditory } from '../models/Auditory';
import { EventFilters } from '../models/Event';
import { Group } from '../models/Group';
import { GroupList } from '../models/GroupList';
import { Institute } from '../models/Institute';
import { Pair, PairFilters } from '../models/Pair';
import { Teacher } from '../models/Teacher';
import { Week } from '../models/Week';
import IApi from './IApi';

export class Api extends IApi {
  private readonly BASE_URL = 'http://localhost:8000';
  private readonly axios = axios.create({ baseURL: this.BASE_URL });

  async getGroupsInInstitute(instituteId: number): Promise<GroupList> {
    return this.axios.get<GroupList>(`/groups/${instituteId}`).then((data) => data.data);
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

  async filterPairList(filters: PairFilters): Promise<Pair[]> {
    const params = pairFiltersToSearchParams(filters);
    return this.axios.get<Pair[]>('/pair', { params }).then((data) => data.data);
  }
  async filterEventList(filters: EventFilters): Promise<Event[]> {
    const params = eventFiltersToSearchParams(filters);
    return this.axios.get<Event[]>('/event', { params }).then((data) => data.data);
  }
}

export const ApiInstance = new Api();
