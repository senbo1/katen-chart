import { useState, useEffect, useCallback } from 'react';

const STORAGE_PREFIX = 'anime_';

export const useAnimeWatching = (title: string, totalEpisodes: number) => {
  const [watchedEpisodes, setWatchedEpisodes] = useState<number>(-1);

  useEffect(() => {
    const storedStatus = localStorage.getItem(`${STORAGE_PREFIX}${title}`);
    if (storedStatus) {
      try {
        const parsed = JSON.parse(storedStatus);
        setWatchedEpisodes(parsed.watchedEpisodes ?? -1);
      } catch (error) {
        console.error('Failed to parse stored anime status:', error);
      }
    }
  }, [title]);

  const updateWatchedEpisodes = useCallback(
    (episodes: number) => {
      localStorage.setItem(
        `${STORAGE_PREFIX}${title}`,
        JSON.stringify({ watchedEpisodes: episodes })
      );
      setWatchedEpisodes(episodes);
    },
    [title]
  );

  const startWatching = useCallback(() => {
    updateWatchedEpisodes(0);
  }, [updateWatchedEpisodes]);

  const increaseWatched = useCallback(() => {
    if (totalEpisodes && watchedEpisodes < totalEpisodes) {
      updateWatchedEpisodes(watchedEpisodes + 1);
    }
  }, [watchedEpisodes, totalEpisodes, updateWatchedEpisodes]);

  const decreaseWatched = useCallback(() => {
    if (watchedEpisodes > 0) {
      updateWatchedEpisodes(watchedEpisodes - 1);
    } else if (watchedEpisodes === 0) {
      updateWatchedEpisodes(-1);
    }
  }, [watchedEpisodes, updateWatchedEpisodes]);

  const isWatching = watchedEpisodes >= 0;

  const progress = (watchedEpisodes / totalEpisodes) * 100;

  return {
    watchedEpisodes,
    isWatching,
    progress,
    startWatching,
    increaseWatched,
    decreaseWatched,
  } as const;
};
