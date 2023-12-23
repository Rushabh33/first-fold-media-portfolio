import {
  Button as NextButton,
  Link,
  InputProps,
  ButtonProps,
} from '@nextui-org/react';
import { Arrow } from '../icons/arrow';
import { ARROW_TYPES } from '../constants';
import './styles/custom-styles.css';
import { InputHTMLAttributes } from 'react';

export enum ICON_SIZE {
  xl = 'h-8 w-8',
}

interface CustomButtonProps extends ButtonProps {
  classNames?: string;
  arrowType?: ARROW_TYPES;
  iconSize?: ICON_SIZE;
}

export function Button({
  children,
  arrowType = ARROW_TYPES.ACCORDION_OPEN,
  classNames,
  href,
  iconSize,
  ...props
}: CustomButtonProps) {
  const isLink = href ? { as: Link } : {};
  return (
    <NextButton
      className={`flex h-6 min-w-min gap-2.5 px-0.5 items-end justify-start rounded-none border-b-1 text-medium sm:text-lg leading-[18px] sm:leading-[20px] text-zinc-100 font-medium border-b-zinc-100 bg-transparent hover-width-animation ${classNames}`}
      endContent={<Arrow classNames={`${arrowType} ${iconSize} mb-[3px]`} />}
      href={href}
      {...isLink}
      {...props}
    >
      {children}
    </NextButton>
  );
}
