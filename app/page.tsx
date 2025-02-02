import { SessionProvider } from 'next-auth/react';
import AnimeList from '@/components/AnimeList/AnimeList';
import Header from '@/components/Header/Header';
import { HeroLine } from '@/components/HeroLine';

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <SessionProvider>
        <Header />
      </SessionProvider>
      <div className="w-full mx-auto flex flex-col items-center p-2 xl:p-0 my-16">
        <HeroLine />
        <AnimeList />
      </div>
    </>
  );
}
