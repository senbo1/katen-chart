'use client';

import { LineShadowText } from '@/components/ui/line-shadow-text';
import { useTheme } from 'next-themes';

export function HeroLine() {
  const theme = useTheme();
  const shadowColor = theme.resolvedTheme === 'dark' ? 'white' : 'black';
  return (
    <h2 className="text-center text-balance text-3xl font-semibold leading-none tracking-tighter sm:text-6xl md:text-4xl lg:text-7xl py-4 max-w-5xl">
      Your Favourite Seasonal Anime{' '}
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Tracker
      </LineShadowText>
    </h2>
  );
}
