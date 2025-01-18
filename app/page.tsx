import List from '@/components/AnimeList/List';
import Header from '@/components/Header/Header';
import { HeroLine } from '@/components/HeroLine';

export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center pt-2">
        <HeroLine />
        <List />
      </div>
    </>
  );
}
