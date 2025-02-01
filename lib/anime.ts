import axios from 'axios';
import { Anime, AnimeResponse } from '../types/anime';
import { delay } from './utils';

const fetchWithRetry = async (
  page: number,
  retries = 3
): Promise<AnimeResponse> => {
  try {
    const res = await axios.get(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 429) {
      if (retries > 0) {
        console.log(
          `Rate limited on page ${page}, waiting before retry. Attempts remaining: ${retries}`
        );
        await delay(1000);
        return fetchWithRetry(page, retries - 1);
      }
      throw new Error('Rate limit exceeded after all retry attempts');
    }
    throw error;
  }
};

export const getAnimeList = async (): Promise<Anime[][]> => {
  const allAnime: Anime[] = [];
  let page = 1;
  let hasNextPage = true;
  const seenIds = new Set<number>();
  const RATE_LIMIT_DELAY = 350;
  const ITEMS_PER_PAGE = 24;

  while (hasNextPage) {
    try {
      await delay(RATE_LIMIT_DELAY);

      const response = await fetchWithRetry(page);
      const { data: anime, pagination } = response;

      // Remove duplicates
      anime.forEach((show) => {
        if (!seenIds.has(show.mal_id)) {
          allAnime.push(show);
          seenIds.add(show.mal_id);
        }
      });

      hasNextPage = pagination.has_next_page;
      page++;

      // if (page > 1) break; // Fetch only the first page for demo purposes
    } catch (error) {
      console.error('Error fetching anime:', error);
      throw error;
    }
  }

  // Chunk the anime list into groups of ITEMS_PER_PAGE
  const chunkedAnimeList: Anime[][] = [];
  for (let i = 0; i < allAnime.length; i += ITEMS_PER_PAGE) {
    chunkedAnimeList.push(allAnime.slice(i, i + ITEMS_PER_PAGE));
  }

  if (!hasNextPage && chunkedAnimeList.length > 0) {
    console.log('Finished fetching anime list');
  }

  return chunkedAnimeList;
};
