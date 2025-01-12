export type Pagination = {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: {
    count: number;
    total: number;
    per_page: number;
  };
};

export type Anime = {
  mal_id: number;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  title: string;
  title_english?: string;
  type: string;
  episodes?: number;
  status: string;
  season: string;
  year: number;
  broadcast: {
    day?: string;
    time?: string;
    timezone?: string;
    string?: string;
  };
  studios: [
    {
      mal_id: number;
      name: string;
      type: string;
      url: string;
    }
  ];
  score?: number;
  scored_by?: number;
  synopsis?: string;
};

export type AnimeResponse = {
  pagination: Pagination;
  data: Anime[];
};
