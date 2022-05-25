import axios from 'axios';
import {
  eventFiltersToSearchParams,
  pairFiltersToSearchParams,
} from '../helpers/query';
import { Auditory } from '../models/Auditory';
import { EventFilters } from '../models/Event';
import { Group } from '../models/Group';
import { Institute } from '../models/Institute';
import { Pair, PairFilters } from '../models/Pair';
import { Teacher } from '../models/Teacher';
import { Week } from '../models/Week';
import IApi from './IApi';

export class Api extends IApi {
  private readonly BASE_URL = '';
  private readonly axios = axios.create({ baseURL: this.BASE_URL });

  async getAllGroups(): Promise<Group[]> {
    return this.axios.get<Group[]>('/group').then((data) => data.data);
  }
  async getAllInstitutes(): Promise<Institute[]> {
    return this.axios.get<Institute[]>('/institute').then((data) => data.data);
  }
  async getAllAuditory(): Promise<Auditory[]> {
    return this.axios.get<Auditory[]>('/auditory').then((data) => data.data);
  }
  async getAllTeachers(): Promise<Teacher[]> {
    return this.axios.get<Teacher[]>('/teacher').then((data) => data.data);
  }

  async getWeek(weekBeginingDate: string): Promise<Week> {
    return this.axios
      .get<Week>(`/week/${weekBeginingDate}`)
      .then((data) => data.data);
  }

  async filterPairList(filters: PairFilters): Promise<Pair[]> {
    const params = pairFiltersToSearchParams(filters);
    return this.axios
      .get<Pair[]>('/pair', { params })
      .then((data) => data.data);
  }
  async filterEventList(filters: EventFilters): Promise<Event[]> {
    const params = eventFiltersToSearchParams(filters);
    return this.axios
      .get<Event[]>('/event', { params })
      .then((data) => data.data);
  }
}
