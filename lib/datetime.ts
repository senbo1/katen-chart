import { TimeUnits } from '@/types/countdown';
import { DAYS_OF_WEEK, TIME_UNITS } from './constants';

export const getJSTDate = (): Date =>
  new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));

export const getDayIndex = (day: string): number => DAYS_OF_WEEK.indexOf(day);

export const calculateTimeRemaining = (targetDate: Date): TimeUnits => {
  const now = getJSTDate();
  const remaining = targetDate.getTime() - now.getTime();

  return {
    days: Math.floor(remaining / TIME_UNITS.days.ms),
    hours: Math.floor((remaining % TIME_UNITS.days.ms) / TIME_UNITS.hours.ms),
    minutes: Math.floor(
      (remaining % TIME_UNITS.hours.ms) / TIME_UNITS.minutes.ms
    ),
  };
};

export const getNextBroadcastDate = (day: string, time: string): Date => {
  const now = getJSTDate();
  const nextDate = new Date(now);
  const dayIndex = getDayIndex(day);
  const [hours, minutes] = time.split(':').map(Number);

  const daysUntilNext = (dayIndex + (7 - now.getDay())) % 7;
  nextDate.setDate(nextDate.getDate() + daysUntilNext);
  nextDate.setHours(hours, minutes, 0, 0);

  if (nextDate < now) {
    nextDate.setDate(nextDate.getDate() + 7);
  }

  return nextDate;
};

export const formatTimeRemaining = (time: TimeUnits): string =>
  `${time.days}d ${time.hours}h ${time.minutes}m`;
