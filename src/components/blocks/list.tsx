import { ListIcon } from '../icons/list-icon';

export function List({
  listContent,
  classNames,
}: {
  listContent: string[];
  classNames?: string;
}) {
  return (
    <ul className={`py-4 pr-3 ${classNames}`}>
      {listContent.map((content, idx) => {
        return (
          <li
            className='flex items-center gap-2 mb-3 last:mb-0'
            key={idx + content}
          >
            {<ListIcon classNames='mt-1' />}
            {/* {<Arrow classNames={`${ARROW_TYPES.POINT}`} />} */}
            {content}
          </li>
        );
      })}
    </ul>
  );
}
