import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Building2, Play } from 'lucide-react';
import { SynopsisModal } from './SynopsisModal';
import { Anime, AnimeStatus } from '@/types/anime';
import Image from 'next/image';
import WatchingStatusControl from './WatchingStatusControl';
import Countdown from './Countdown';

export default function AnimeCard({
  images: {
    webp: { large_image_url },
  },
  trailer: { url },
  title,
  title_english,
  type,
  broadcast: { day: broadcastDay, time: broadcastTime },
  studios,
  score,
  scored_by: scoredBy,
  episodes: totalEpisodes,
  status,
  aired: { string: airedString },
  synopsis,
}: Readonly<Anime>) {
  const image = large_image_url;
  const joinedStudios = studios.map((studio) => studio.name).join(', ');

  return (
    <Card className="flex flex-col items-center xs:items-stretch xs:flex-row w-[300px] xs:w-[500px] xs:h-72 transform hover:border-green-500 transition-all ease-in-out">
      <Image
        src={image}
        alt={title}
        width={200}
        height={260}
        className="mt-4 w-64 xs:mt-0 xs:w-[200px] xs:h-auto rounded-xl xs:rounded-r-none xs:rounded-l-xl"
      />
      <div className="flex flex-col justify-between h-full w-full">
        <CardHeader className="p-4 pt-4">
          <div className="flex justify-between items-center w-full">
            <CardTitle
              className={`mx-auto text-sm text-center xs:text-lg line-clamp-2 max-h-14`}
            >
              {title_english || title}
            </CardTitle>
            <Badge variant="secondary" className="hidden xs:block ml-2 text-xs">
              {type}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="hidden p-4 pt-0 xs:flex flex-col gap-2">
          <div className="flex flex-col gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Star className="mr-1 h-4 w-4 text-yellow-400" />
              <span>
                {!score
                  ? 'N/A'
                  : `${score} (${scoredBy?.toLocaleString() || 0})`}
              </span>
            </div>
            <Countdown
              broadcastDay={broadcastDay}
              broadcastTime={broadcastTime}
              airedString={airedString}
              type={type}
              status={status}
            />
            <div className="flex items-center gap-1">
              <Building2 className="mr-1 h-4 w-4" />
              <span>{joinedStudios || 'N/A'}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col px-4 pb-5 gap-2 w-full">
          {status === AnimeStatus.NOT_YET_AIRED || !totalEpisodes ? null : (
            <WatchingStatusControl
              title={title}
              totalEpisodes={totalEpisodes}
            />
          )}
          <div className="flex flex-row gap-2">
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
