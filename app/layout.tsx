import type { Metadata } from 'next';
import './globals.css';
import ThemeProvider from '@/components/Providers/ThemeProvider';
import { poppins } from '@/lib/fonts';
import { Analytics } from '@vercel/analytics/next';

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
      <head>
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" async /> */}
      </head>
      <body className={`${poppins.className}  antialiased max-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
