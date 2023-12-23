import { Montserrat, Bebas_Neue } from 'next/font/google';

export const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
