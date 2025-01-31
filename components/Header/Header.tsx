// import { buttonVariants } from '../ui/button';
import { TextLoop } from '../ui/text-loop';
import ThemeToggle from '../ui/ThemeToggle';
import { GitHubStarButton } from './GithubButton';
// import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-10 backdrop-blur-md bg-background/60">
      <nav className="container mx-auto flex justify-between items-center h-16 p-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold">
            <TextLoop className="text-green-600 mr-2">
              <span>katen</span>
              <span>加点</span>
            </TextLoop>
            <span>chart</span>
          </h1>
        </div>
        <div className="flex gap-2">
          <GitHubStarButton repoUrl="https://github.com/senbo1/katen-chart" />
          <ThemeToggle />
          {/* <Link
            href="/sign-in"
            className={buttonVariants({ variant: 'default' })}
          >
            Sign In
          </Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
