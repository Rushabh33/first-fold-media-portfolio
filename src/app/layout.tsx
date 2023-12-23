import type { Metadata } from 'next';
import { montserrat, bebas } from './fonts';
import { Providers } from './providers';
import Image from 'next/image';
import ChromeSwirl from '../../public/chrome-swirl.png';
import './globals.css';

export const metadata: Metadata = {
  title: 'First Fold Media',
  description: 'Website design and development',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`${bebas.variable} ${montserrat.variable} dark`}>
      <body className='pt-12 md:pt-20 px-10 md:px-16 max-w-screen-2xl mx-auto relative overflow-x-hidden'>
        <Image
          alt='background style image'
          className='absolute sm:right-0 animate-spin-slow right-[-100px] top-[120px] sm:top-0 overflow-hidden'
          src={ChromeSwirl}
        />
        <Providers>{children}</Providers>
        {/* <Image
          alt='background style image'
          className=' animate-spin-slow bottom-0 -z-[1]'
          src={ChromeSwirl2}
        /> */}
      </body>
    </html>
  );
}
