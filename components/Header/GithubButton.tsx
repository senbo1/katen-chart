'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface GitHubStarButtonProps {
  readonly repoUrl: string;
  readonly className?: string;
}

export function GitHubStarButton({
  repoUrl,
  className,
}: GitHubStarButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      variant="ghost"
      className={`hidden sm:flex items-center gap-2 group ${className}`}
      asChild
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={repoUrl} target="_blank" rel="noopener noreferrer">
        <Star
          className={`w-4 h-4 transition-colors duration-200 ${
            isHovered ? 'fill-current' : 'fill-transparent'
          }`}
        />
        GitHub
      </a>
    </Button>
  );
}
