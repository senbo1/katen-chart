'use client';

import { useState } from 'react';
import { Anime } from '@/types/anime';
import AnimeCard from './AnimeCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const AnimeGrid = ({ initialAnimePages }: { initialAnimePages: Anime[][] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = initialAnimePages.length;
  const currentAnime = initialAnimePages[currentPage];

  return (
    <div className="flex flex-col items-center gap-4">
      <main className="grid grid-cols-1 place-items-center justify-center items-start lg:grid-cols-2 2xl:grid-cols-3 gap-3 mb-4 mx-2">
        {currentAnime.map((anime) => (
          <AnimeCard key={anime.mal_id} {...anime} />
        ))}
      </main>

      <Pagination className="mb-8">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => setCurrentPage((p) => p - 1)}
              isActive={currentPage === 0}
              className={
                currentPage === 0
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem
              key={`page-${index + 1}`}
              className="hidden md:block"
            >
              <PaginationLink
                onClick={() => setCurrentPage(index)}
                isActive={currentPage === index}
                className={
                  currentPage === index ? 'bg-accent' : 'cursor-pointer'
                }
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={() => setCurrentPage((p) => p + 1)}
              isActive={currentPage === totalPages - 1}
              className={
                currentPage === totalPages - 1
                  ? 'pointer-events-none opacity-50'
                  : 'cursor-pointer'
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AnimeGrid;
