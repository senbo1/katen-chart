import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, Building2, Play } from 'lucide-react';
import { SynopsisModal } from './SynopsisModal';
import { Anime } from '@/lib/types';
import Image from 'next/image';
import WatchingStatusControl from './WatchingStatusControl';

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
  status,
  aired: { string: airedString },
  synopsis,
}: Anime) {
  const image = large_image_url;
  const joinedStudios = studios.map((studio) => studio.name).join(', ');

  return (
    <Card className="flex flex-row w-[500px] h-72">
      <Image
        src={image}
        alt={title}
        width={200}
        height={280}
        className="rounded-l-xl"
      />
      <div className="flex flex-col justify-between h-full">
        <CardHeader className="p-4 pt-4">
          <div className="flex justify-between items-center">
            <CardTitle className={` text-lg line-clamp-2 max-h-14`}>
              {title_english || title}
            </CardTitle>
            <Badge variant="secondary" className="ml-2 text-xs">
              {type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-4 pt-0 flex flex-col gap-2">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="mr-1 h-4 w-4 text-yellow-400" />
              <span>
                {!score
                  ? 'N/A'
                  : `${score} (${scoredBy?.toLocaleString() || 0})`}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="mr-1 h-4 w-4" />
              <span>
                {type !== 'TV' ? airedString || 'N/A' : broadcastDay || 'N/A'}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Building2 className="mr-1 h-4 w-4" />
              <span>{joinedStudios || 'N/A'}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col px-4 pb-5 gap-2 ">
          <WatchingStatusControl
            title={title}
            totalEpisodes={totalEpisodes}
            status={status}
          />
          <div className="flex gap-2">
            <Button size="sm" className="w-1/2" asChild>
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-3 w-3" /> Trailer
              </a>
            </Button>
            <SynopsisModal title={title} synopsis={synopsis} />
          </div>
        </CardFooter>
      </div>
    </Card>
  );
}
