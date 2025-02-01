import { getAnimeList } from '@/lib/anime';
import AnimeCard from './AnimeCard';

const List = async () => {
  const animeShows = await getAnimeList();
  return (
    <main className="grid grid-cols-1 place-items-center justify-center items-start lg:grid-cols-2 2xl:grid-cols-3 gap-3 mb-4 mx-2">
      {animeShows.map((anime) => (
        <AnimeCard key={anime.mal_id} {...anime} />
      ))}
    </main>
  );
};

export default List;
