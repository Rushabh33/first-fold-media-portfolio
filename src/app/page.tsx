'use client';

import { Button, ICON_SIZE } from '../components/blocks/button';
import { Accordian } from '../components/blocks/accordian';
import { Card } from '@nextui-org/react';
import Image from 'next/image';
import { List } from '@/components/blocks/list';
import { Link } from '@/components/blocks/link';
import { ARROW_TYPES } from '@/components/constants';
import { ContactFrom } from '@/components/form/Form';
import ChromeSwirl2 from '../../public/chrome-swirl-2.png';
import LawPortfolio from '../../public/legal-portfolio-design.jpg';
import PetShopPortfolio from '../../public/pet-shop-portfolio-design.jpg';

export default function Page() {
  const accordianContent = [
    {
      title: 'website and webflow development',
      content: `Your website is your business's first impression, and we understand the weight it carries. Our enterprise-level front-end development expertise ensures a site with unparalleled performance and speed. We prioritize your needs, offering a professionally crafted, technically advanced website that sets your business apart in the digital marketplace.`,
    },
    {
      title: 'web design and brand refresh',
      content: `A cohesive and customer-centric brand presence is at the heart of our web design approach. We collaborate with you to align our creative vision with your business goals, ensuring a design that builds trust, engages your audience, and drives conversions. Our strategic designs tell your brand's story compellingly and visually.`,
    },
    {
      title: 'our process',
      content: `Our web development journey combines research, design, and development, tailored to your unique business needs. We start with comprehensive research to understand your vision, leading to two design layouts for your choice. Post final design approval, our development phase brings your vision to life with precision, ensuring satisfaction without surprises.`,
    },
    {
      title: 'pricing',
      content: `We offer flexible and transparent pricing, starting with a basic 3-page website package, including unique design, exhaustive research, unlimited revisions, and a year of free hosting. We adapt our services to match the complexity of your needs, ensuring a scalable solution. Contact us for detailed pricing and tailored service options.`,
    },
  ];

  const pageTitle = () => {
    return (
      <>
        <h1 className='hidden sm:block sm:text-7xl w-3/4 md:w-[448px]'>
          Invest in your Digital Reputation
        </h1>
        <h1 className='block sm:hidden text-7xl'>First Fold Media</h1>
      </>
    );
  };
  const titleDescription = () => {
    return (
      <>
        <p className='sm:hidden xs:max-w-[310px] text-md mt-0.5'>
          Expertly designed, meticulously developed. Websites that elevate your
          brand&apos;s online image
        </p>
        <p className='hidden sm:inline-block max-w-2xl text-lg mt-4'>
          Expertly designed, meticulously developed. Elevate your brand with a
          digital presence that captivates your audience, drives engagement, and
          turns{' '}
          <strong className='px-1 bg-yellow-400 text-black'>visitors</strong>{' '}
          into{' '}
          <strong className='px-1 bg-yellow-400 text-black'>
            loyal customers
          </strong>
          . Let&apos;s build your online success story.
        </p>
      </>
    );
  };
  return (
    <div className='relative overflow-hidden px-1'>
      <header>
        <div className='hidden sm:block text-xs w-full text-right'>
          <p>First Fold Media</p>
          <p>Made with {'<3'} in Toronto</p>
        </div>
        <div className='flex sm:justify-between'>{pageTitle()}</div>
        {titleDescription()}
        <Button
          classNames='mt-4 w-fit'
          arrowType={ARROW_TYPES.INTERNAL_LINK}
          href='#form'
        >
          ask how
        </Button>
      </header>
      <section className='columns-1 sm:columns-2 gap-x-10 space-y-16 sm:mt-[10%]'>
        <Accordian accordianOptions={accordianContent} classNames='mt-32' />
        <Card className='group relative rounded-lg p-6 bg-orange-300 outline'>
          <Image
            alt='Woman listing to music'
            className='w-full max-h-[25rem] rounded-lg object-cover object-top leading-[29px]'
            src={LawPortfolio}
          />
          <div className='absolute left-0 top-0 w-full h-0 overflow-hidden bg-gray-950 bg-opacity-95 !ease-in !duration-300 transition-height group-hover:h-full'>
            <div className='p-8'>
              <h2 className='text-3xl sm:text-4xl border-b-3 leading-[31px]'>
                Hellinga Law & Consulting
              </h2>
              <Link
                classNames='border-b-2 justify-start items-center pt-1'
                href='#'
              >
                <span className='hidden sm:block'>
                  www.hellingalawandconsulting.com
                </span>
                <span className='sm:hidden'>go to website</span>
              </Link>
              <List
                listContent={[
                  'website development',
                  'website design',
                  'brand refresh',
                  '**currently under development**',
                ]}
                classNames='mt-1'
              />
            </div>
          </div>
        </Card>
        <Card className='group relative rounded-lg p-6 bg-orange-600 outline'>
          <Image
            alt='Woman listing to music'
            className='w-full max-h-[45rem] rounded-lg object-cover object-top leading-[29px]'
            src={PetShopPortfolio}
          />
          <div className='absolute left-0 top-0 w-full h-0 overflow-hidden bg-gray-950 bg-opacity-95 !ease-in !duration-300 transition-height  group-hover:h-full'>
            <div className='p-8'>
              {/* <h2 className='text-4xl border-b-3'>Hellinga Law & Consulting</h2> */}
              <Link
                classNames='justify-between border-b-3 text-3xl sm:text-4xl h-auto'
                href='#'
                iconSize={ICON_SIZE.xl}
              >
                Pet First
              </Link>
              <List
                listContent={[
                  'brand refresh',
                  'website design',
                  'website development',
                  '**currently under development**',
                ]}
                classNames='mt-1'
              />
            </div>
          </div>
        </Card>
      </section>
      <section className='my-8 p-6 outline rounded-lg'>
        <h3 className='inline-block text-xl sm:text-3xl border-b-3 w-full'>
          Ask how
        </h3>
        <ContactFrom />
      </section>
      <Image
        alt='background style image'
        className='absolute animate-spin-slow bottom-0 right-0 -z-[1] w-1/2'
        src={ChromeSwirl2}
      />
    </div>
  );
}
