'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Star,
  Calendar,
  Building2,
  Play,
  Plus,
  Minus,
  Eye,
} from 'lucide-react';
import { SynopsisModal } from './SynopsismModal';
import { Anime } from '@/lib/types';
import Image from 'next/image';

interface WatchingStatus {
  isWatching: boolean;
  watchedEpisodes: number;
}

export default function AnimeCard({
  images: {
    webp: { large_image_url },
  },
  trailer: { url },
  title,
  title_english,
  type,
  broadcast: { day: broadcastDay },
  studios,
  score,
  scored_by: scoredBy,
  episodes: totalEpisodes,
  // status,
  synopsis,
}: Anime) {
  const image = large_image_url;
  const joinedStudios = studios.map((studio) => studio.name).join(', ');

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

  return (
    <Card className="w-full max-w-xl overflow-hidden">
      <div className="flex">
        <Image src={image} alt={title} width={192} height={100} />
        <div className="w-2/3">
          <CardHeader className="p-4">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-bold">
                {title_english || title}
              </CardTitle>
              <Badge variant="secondary" className="ml-2 text-xs">
                {type}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 grid gap-2">
            <div className="flex items-center text-sm">
              <Star className="mr-1 h-4 w-4 text-yellow-400" />
              <span>
                {!score && 'N/A'}
                {score && score} ({scoredBy && scoredBy.toLocaleString()})
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="mr-1 h-4 w-4" />
              <span>{broadcastDay}</span>
            </div>
            <div className="flex items-center text-sm">
              <Building2 className="mr-1 h-4 w-4" />
              <span>{joinedStudios}</span>
            </div>
            <div className="m-2">
              {/* <span className="text-sm font-medium">Episodes:</span> */}
              {watchingStatus.isWatching ? (
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    onClick={decreaseWatched}
                    disabled={watchingStatus.watchedEpisodes === 0}
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
                <Button
                  variant="outline"
                  size="sm"
                  onClick={startWatching}
                  className="ml-2"
                >
                  <Eye className="mr-2 h-4 w-4" /> Start Watching
                </Button>
              )}
            </div>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="sm" className="w-1/2" asChild>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <Play className="mr-2 h-3 w-3" /> Trailer
                </a>
              </Button>
              <SynopsisModal title={title} synopsis={synopsis} />
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
