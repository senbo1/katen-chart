import axios, { AxiosResponse } from 'axios';
import { Anime, AnimeResponse } from './types';

export const getAnimeShows = async (): Promise<Anime[]> => {
  let animeList: Anime[] = [];
  let page = 1;
  let hasNextPage = true;

  while (hasNextPage) {
    const res: AxiosResponse<AnimeResponse> = await axios.get(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
    const { data: anime } = res.data;
    animeList = animeList.concat(anime);

    hasNextPage = res.data.pagination.has_next_page;
    page++;
  }

  return animeList;
};
