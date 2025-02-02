'use client';

import { TextLoop } from '../ui/text-loop';
import ThemeToggle from '../ui/ThemeToggle';
import { GitHubStarButton } from './GithubButton';
import { SignOutButton } from './SignoutButton';
import { SignInButton } from './SignInButton';
import { useSession } from 'next-auth/react';
// import XReviewsButton from './XReviewsButton';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="fixed inset-x-0 top-0 z-10 backdrop-blur-md bg-background/60">
      <nav className="container mx-auto flex justify-between items-center h-16 p-4">
        <div className="flex items-center gap-2 max-w-20 w-full">
          <h1 className="flex text-xl font-bold">
            <TextLoop className="text-green-600 mr-2 max-w-40 overflow-hidden">
              <span>katen</span>
              <span>加点</span>
              {session?.user?.name && (
                <span>{session?.user?.name?.split(' ')[0]}</span>
              )}
            </TextLoop>
            <span>chart</span>
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          {/* <XReviewsButton /> */}
          <GitHubStarButton repoUrl="https://github.com/senbo1/katen-chart" />
          <ThemeToggle />
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
