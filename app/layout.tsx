import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/Providers/ThemeProvider';
import { poppins } from '@/lib/fonts';

export const metadata: Metadata = {
  title: 'Katen chart',
  description: 'Anime currently airing in the ongoing season.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className}  antialiased max-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
