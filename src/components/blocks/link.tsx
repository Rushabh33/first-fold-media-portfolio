import { constants } from 'buffer';
import { Arrow } from '../icons/arrow';
import { Button, ICON_SIZE } from './button';
import { ARROW_TYPES } from '../constants';

export function Link({
  href,
  children,
  type = ARROW_TYPES.EXTERNAL_LINK,
  classNames,
  iconSize,
}: {
  href: string;
  children: React.ReactNode;
  classNames?: string;
  type?: ARROW_TYPES;
  iconSize?: ICON_SIZE;
}) {
  return (
    <Button
      classNames={'justify-between ' + classNames}
      arrowType={type}
      href={href}
      iconSize={iconSize}
    >
      {children}
    </Button>
  );
}
