'use client';
import { FC, useEffect, useState } from 'react';
import { Plus, Minus, Eye, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimeStatus } from '@/lib/types';

type WatchingStatusControlProps = {
  title: string;
  totalEpisodes?: number;
  status: AnimeStatus;
};

interface WatchingStatus {
  isWatching: boolean;
  watchedEpisodes: number;
}

const WatchingStatusControl: FC<WatchingStatusControlProps> = ({
  title,
  totalEpisodes,
  status,
}) => {
  const [watchingStatus, setWatchingStatus] = useState<WatchingStatus>({
    isWatching: false,
    watchedEpisodes: 0,
  });

  useEffect(() => {
    const storedStatus = localStorage.getItem(`anime_${title}`);
    if (storedStatus) {
      setWatchingStatus(JSON.parse(storedStatus));
    }
  }, [title]);

  const updateLocalStorage = (status: WatchingStatus) => {
    localStorage.setItem(`anime_${title}`, JSON.stringify(status));
    setWatchingStatus(status);
  };

  const startWatching = () => {
    updateLocalStorage({ isWatching: true, watchedEpisodes: 0 });
  };

  const increaseWatched = () => {
    if (totalEpisodes && watchingStatus.watchedEpisodes < totalEpisodes) {
      updateLocalStorage({
        ...watchingStatus,
        watchedEpisodes: watchingStatus.watchedEpisodes + 1,
      });
    }
  };

  const decreaseWatched = () => {
    if (watchingStatus.watchedEpisodes > 0) {
      updateLocalStorage({
        ...watchingStatus,
        watchedEpisodes: watchingStatus.watchedEpisodes - 1,
      });
    } else if (watchingStatus.watchedEpisodes === 0) {
      updateLocalStorage({ isWatching: false, watchedEpisodes: 0 });
    }
  };

  if (status === AnimeStatus.NOT_YET_AIRED) {
    return (
      <div className="flex items-center text-sm text-muted-foreground">
        <Clock className="mr-2 h-4 w-4" />
        <span>Not yet aired</span>
      </div>
    );
  }

  return (
    <div className="mt-2">
      {watchingStatus.isWatching ? (
        <div className="flex items-center">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={decreaseWatched}
            disabled={watchingStatus.watchedEpisodes === -1}
            aria-label="Decrease watched episodes"
          >
            <Minus className="h-4 w-4" />
          </Button>
          <span className="mx-2 text-sm font-medium">
            {watchingStatus.watchedEpisodes} / {totalEpisodes}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={increaseWatched}
            disabled={watchingStatus.watchedEpisodes === totalEpisodes}
            aria-label="Increase watched episodes"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button variant="outline" size="sm" onClick={startWatching}>
          <Eye className="mr-2 h-4 w-4" /> Start Watching
        </Button>
      )}
    </div>
  );
};

export default WatchingStatusControl;
