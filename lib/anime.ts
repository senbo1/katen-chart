import axios, { AxiosResponse } from 'axios';
import { Anime, AnimeResponse } from './types';
// import { delay } from './utils';

export const getAnimeList = async (): Promise<Anime[]> => {
  const animeList: Anime[] = [];
  let page = 1;
  let hasNextPage = true;
  const seenIds = new Set<number>();

  while (hasNextPage) {
    const res: AxiosResponse<AnimeResponse> = await axios.get(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
    const { data: anime } = res.data;

    anime.forEach((show) => {
      if (!seenIds.has(show.mal_id)) {
        animeList.push(show);
        seenIds.add(show.mal_id);
      }
    });

    hasNextPage = res.data.pagination.has_next_page;
    page++;

    // if (page % 2 === 0) {
    //   await delay(1000);
    // }
    if (page > 2) {
      break;
    }
  }

  return animeList;
};
