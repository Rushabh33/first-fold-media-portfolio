'use client';
import { Accordion as NextAccordion, AccordionItem } from '@nextui-org/react';
import { Arrow } from '../icons/arrow';
import './styles/custom-styles.css';

interface AccordianOptionsProps {
  title: string;
  content: string | React.ReactNode;
}

export function Accordian({
  accordianOptions,
  classNames,
}: {
  accordianOptions: AccordianOptionsProps[];
  classNames?: string;
}) {
  let itemClasses = {
    trigger: `z-0 pb-0 border-b-3 border-b-zinc-100 mt-4 pt-2 bg-transparent hover-width-animation `,
    title: 'pl-0.5 text-xl sm:text-2xl leading-[18px] sm:leading-[22px]',
    indicator: `pl-1 pr-0.5 pb-0.5`,
    content: 'pt-4',
  };

  return (
    <NextAccordion
      divide-nonefullWidth={true}
      className={`px-0 divide-none ${classNames}`}
      itemClasses={itemClasses}
    >
      {accordianOptions.map((option, idx) => (
        <AccordionItem
          key={`${idx + option.title}`}
          aria-label={`accordion button that explains the company's ${option.title}`}
          indicator={<Arrow />}
          title={option.title}
        >
          {option.content}
        </AccordionItem>
      ))}
    </NextAccordion>
  );
}
