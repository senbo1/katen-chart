import { AnimeStatus } from './anime';

export interface TimeUnits {
  days: number;
  hours: number;
  minutes: number;
}

export type TimeUnit = keyof TimeUnits;

export interface CountdownProps {
  broadcastDay?: string;
  broadcastTime?: string;
  airedString?: string;
  type: string;
  status: AnimeStatus;
}
