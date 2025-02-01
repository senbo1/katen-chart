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
          ? airedString ?? 'N/A'
          : formatTimeRemaining(timeRemaining) ?? 'N/A'}
      </span>
    </div>
  );
};

export default Countdown;
