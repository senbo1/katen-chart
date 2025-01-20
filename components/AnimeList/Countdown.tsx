'use client';

import { FC, useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';
import { AnimeStatus } from '@/types/anime';
import { TimeUnits } from '@/types/countdown';
import { TIME_UNITS } from '@/lib/constants';
import { calculateTimeRemaining, getNextBroadcastDate } from '@/lib/datetime';

type CountdownProps = {
  broadcastDay?: string;
  broadcastTime?: string;
  airedString?: string;
  type: string;
  status: AnimeStatus;
};

const Countdown: FC<CountdownProps> = ({
  broadcastDay,
  broadcastTime,
  airedString,
  type,
  status,
}) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeUnits>({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    if (type !== 'TV' || !broadcastDay || !broadcastTime) {
      return;
    }

    const updateCountdown = () => {
      const nextBroadcast = getNextBroadcastDate(broadcastDay, broadcastTime);
      setTimeRemaining(calculateTimeRemaining(nextBroadcast));
    };

    // Initial update
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, TIME_UNITS.minutes.ms);
    return () => clearInterval(interval);
  }, [type, broadcastDay, broadcastTime]);

  if (status === AnimeStatus.FINISHED_AIRING) {
    return (
      <div className="flex items-center gap-1">
        <Calendar className="mr-1 h-4 w-4" />
        <span>Finished Airing</span>
      </div>
    );
  }

  if (type === 'TV' && status === AnimeStatus.NOT_YET_AIRED) {
    return (
      <div className="flex items-center gap-1">
        <Calendar className="mr-1 h-4 w-4" />
        <span>Not Yet Aired</span>
      </div>
    );
  }

  const formatTimeRemaining = (time: TimeUnits): string => {
    return `${time.days}d ${time.hours}h ${time.minutes}m`;
  };

  return (
    <div className="flex items-center gap-1">
      <Calendar className="mr-1 h-4 w-4" />
      <span>
        {type !== 'TV'
          ? airedString || 'N/A'
          : formatTimeRemaining(timeRemaining) || 'N/A'}
      </span>
    </div>
  );
};

// const getDayIndex = (day: string) => {
//   const days = [
//     'Sundays',
//     'Mondays',
//     'Tuesdays',
//     'Wednesdays',
//     'Thursdays',
//     'Fridays',
//     'Saturdays',
//   ];
//   return days.indexOf(day);
// };

// const getJSTDate = (): Date => {
//   return new Date(
//     new Date().toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })
//   );
// };

// const getNextBroadcastDate = (day: string, time: string) => {
//   const now = getJSTDate();
//   const nextDate = new Date(now);
//   const dayIndex = getDayIndex(day);

//   const [hours, minutes] = time.split(':').map(Number);

//   // Calculate days until next broadcast
//   const daysUntilNext = (dayIndex + (7 - now.getDay())) % 7;
//   nextDate.setDate(nextDate.getDate() + daysUntilNext);
//   nextDate.setHours(hours, minutes, 0, 0);

//   // If the calculated date is in the past, add 7 days
//   if (nextDate < now) {
//     nextDate.setDate(nextDate.getDate() + 7);
//   }

//   console.log(nextDate);

//   return nextDate;
// };

// const calculateTimeRemaining = (targetDate: Date) => {
//   const now = getJSTDate();
//   const remaining = targetDate.getTime() - now.getTime();

//   return {
//     days: Math.floor(remaining / TIME_UNITS.days.ms),
//     hours: Math.floor((remaining % TIME_UNITS.days.ms) / TIME_UNITS.hours.ms),
//     minutes: Math.floor(
//       (remaining % TIME_UNITS.hours.ms) / TIME_UNITS.minutes.ms
//     ),
//   };
// };

// const TIME_UNITS: Record<keyof TimeUnits, { label: string; ms: number }> = {
//   days: { label: 'd', ms: 1000 * 60 * 60 * 24 },
//   hours: { label: 'h', ms: 1000 * 60 * 60 },
//   minutes: { label: 'm', ms: 1000 * 60 },
// };

// type TimeUnits = {
//   days: number;
//   hours: number;
//   minutes: number;
// };

export default Countdown;
