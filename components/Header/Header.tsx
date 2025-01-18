import { Tv } from 'lucide-react';
import { TextLoop } from '../ui/text-loop';
import { playFair } from '@/lib/fonts';
import { Button } from '../ui/button';
import ThemeToggle from '../ui/ThemeToggle';
import { GitHubStarButton } from './GithubButton';

const Header = () => {
  return (
    <header className="sticky inset-0 top-0 z-10 backdrop-blur-md">
      <nav className="container mx-auto flex justify-between items-center h-16 p-4">
        <div className="flex items-center gap-2">
          <Tv className="w-5 h-5" />
          <h1 className="text-xl font-bold">
            <TextLoop className="text-green-600 mr-2">
              <span className={`${playFair.className} italic`}>katen</span>
              <span>加点</span>
            </TextLoop>
            <span>chart</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <GitHubStarButton repoUrl="https://github.com/senbo1/katen-chart" />
          <ThemeToggle />
          <Button variant="outline">Sign Up</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
