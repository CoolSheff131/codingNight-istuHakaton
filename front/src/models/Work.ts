import { Group } from './Group';

export interface Work {
  id: number;
  name: string;
  description: string;
  fileUrl: string;
  group: Group;
}
