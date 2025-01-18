/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';

import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { flushSync } from 'react-dom';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleDarkMode = async () => {
    if (!document.startViewTransition) {
      return setTheme(theme === 'light' ? 'dark' : 'light');
    }

    document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
      });
    }).ready;
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleDarkMode}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ThemeToggle;
