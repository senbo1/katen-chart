import { getAnimeList } from '@/lib/anime';
import AnimeCard from './AnimeCard';

const List = async () => {
  const animeShows = await getAnimeList();
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
        {animeShows.map((anime, index) => (
          <AnimeCard key={index} {...anime} />
        ))}
      </div>
    </div>
  );
};

export default List;
