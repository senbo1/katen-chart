import { getAnimeList } from '@/lib/anime';
import AnimeGrid from './AnimeGrid';

const List = async () => {
  const animeShows = await getAnimeList();
  return <AnimeGrid initialAnimePages={animeShows} />;
};

export default List;
