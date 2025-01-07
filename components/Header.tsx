import { Tv } from 'lucide-react';

const Header = () => {
  return (
    <header className="p-4 sticky inset-0 top-0 z-10 backdrop-blur-md">
      <nav className="flex justify-center items-center">
        <div className="flex items-center gap-2">
          <Tv className="w-6 h-6 mr-2" />
          <h1 className="text-xl font-bold">加点 chart</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;
