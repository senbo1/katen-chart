'use client';

import { LineShadowText } from '@/components/ui/line-shadow-text';
import { useTheme } from 'next-themes';
import { AuroraText } from './ui/aurora-text';
import { useEffect, useState } from 'react';

export function HeroLine() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === 'dark' ? 'white' : 'black';
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <h2 className="text-center text-balance text-3xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-4xl lg:text-7xl py-4 max-w-5xl">
      {isClient ? (
        <>
          Your <AuroraText>Favourite</AuroraText> Seasonal Anime{' '}
          <LineShadowText className="italic" shadowColor={shadowColor}>
            Tracker
          </LineShadowText>
        </>
      ) : (
        'Your Favourite Seasonal Anime Tracker'
      )}
    </h2>
  );
}
