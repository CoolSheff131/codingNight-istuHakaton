import { EventFilters } from '../models/Event';
import { PairFilters } from '../models/Pair';
import { toString } from './string';

export function pairFiltersToSearchParams(
  filters: PairFilters,
): Record<keyof PairFilters, string> {
  return {
    pairType: toString(filters.pairType),
    discipline: toString(filters.discipline),
    teacher: toString(filters.teacher),
    group: toString(filters.group),
    auditory: toString(filters.auditory),
    week_begining: toString(filters.week_begining),
  };
}

export function eventFiltersToSearchParams(
  filters: EventFilters,
): Record<keyof EventFilters, string> {
  return {
    eventType: toString(filters.eventType),
    teacher: toString(filters.teacher),
    group: toString(filters.group),
    auditory: toString(filters.auditory),
  };
}
