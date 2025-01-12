import List from '@/components/AnimeList/List';
import Header from '@/components/Header';

export const revalidate = 3600;

export default function Home() {
  return (
    <main>
      <Header />

      <List />
    </main>
  );
}
