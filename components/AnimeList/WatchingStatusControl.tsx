'use client';
import { FC } from 'react';
import { Plus, Minus, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AnimeStatus } from '@/types/anime';
import { RainbowButton } from '../ui/rainbow-button';
import { useAnimeWatching } from '@/hooks/useAnimeWatching';

type WatchingStatusControlProps = {
  title: string;
  totalEpisodes?: number;
  status: AnimeStatus;
};

const WatchingStatusControl: FC<WatchingStatusControlProps> = ({
  title,
  totalEpisodes,
  status,
}) => {
  const {
    watchedEpisodes,
    isWatching,
    startWatching,
    increaseWatched,
    decreaseWatched,
  } = useAnimeWatching(title, totalEpisodes);

  if (status === AnimeStatus.NOT_YET_AIRED || !totalEpisodes) {
    return null;
  }

  return (
    <div className="mt-2 w-full">
      {isWatching ? (
        <div className="w-full sm:max-w-xs space-y-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={decreaseWatched}
              disabled={watchedEpisodes === -1}
              className="rounded-xl border-2 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Minus className="h-4 w-4" />
              <span className="sr-only">Decrease</span>
            </Button>
            <div className="min-w-[100px] text-center">
              <div className="font-medium tabular-nums font-mono">
                {watchedEpisodes} / {totalEpisodes}
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={increaseWatched}
              disabled={watchedEpisodes === totalEpisodes}
              className="rounded-xl border-2 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Plus className="h-4 w-4" />
              <span className="sr-only">Increase</span>
            </Button>
          </div>
        </div>
      ) : (
        <RainbowButton onClick={startWatching} className="w-full">
          <Eye className="mr-2 h-4 w-4" /> Start Watching
        </RainbowButton>
      )}
    </div>
  );
};

export default WatchingStatusControl;
