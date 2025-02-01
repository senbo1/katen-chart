'use client';

import { useTheme } from 'next-themes';
import { LineShadowText } from '@/components/ui/line-shadow-text';
import { AuroraText } from '@/components/ui/aurora-text';
import { useEffect, useState } from 'react';

export function HeroLine() {
  const theme = useTheme();
  const shadowColor = theme?.resolvedTheme === 'dark' ? 'white' : 'black';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <h2 className="text-center font-semibold leading-none text-2xl max-w-sm xs:text-4xl xs:max-w-xl lg:text-7xl w-full lg:max-w-5xl p-4 pt-0 my-4">
        Your <AuroraText>Favourite</AuroraText> Seasonal Anime{' '}
        <span className="italic">Tracker</span>
      </h2>
    );
  }

  return (
    <h2 className="text-center font-semibold leading-none text-2xl max-w-sm xs:text-4xl xs:max-w-xl lg:text-7xl w-full lg:max-w-5xl p-4 pt-0 my-4">
      Your <AuroraText>Favourite</AuroraText> Seasonal Anime{' '}
      <LineShadowText className="italic" shadowColor={shadowColor}>
        Tracker
      </LineShadowText>
    </h2>
  );
}
