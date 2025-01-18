import { Playfair_Display, Poppins } from 'next/font/google';

export const playFair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const poppins = Poppins({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
