import { getAnimeList } from '@/lib/anime';
import AnimeCard from './AnimeCard';

const List = async () => {
  const animeShows = await getAnimeList();
  return (
    <main className="p-4 container mx-auto grid grid-cols-1 place-items-center justify-center items-start lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      {animeShows.map((anime, index) => (
        <AnimeCard key={index} {...anime} />
      ))}
    </main>
  );
};

export default List;
