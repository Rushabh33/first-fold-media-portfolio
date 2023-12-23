export function Arrow({
  classNames,
  width = '16',
  height = '16',
  fill = '#E3E3E3',
}: {
  classNames?: string;
  width?: string;
  height?: string;
  fill?: string;
}) {
  return (
    <svg
      className={classNames}
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.81804 6.98039C0.427515 7.37092 0.427515 8.00408 0.81804 8.39461L7.182 14.7586C7.57253 15.1491 8.20569 15.1491 8.59621 14.7586C8.98674 14.368 8.98674 13.7349 8.59621 13.3444L2.93936 7.6875L8.59621 2.03065C8.98674 1.64012 8.98674 1.00696 8.59621 0.616432C8.20569 0.225908 7.57253 0.225908 7.182 0.616432L0.81804 6.98039ZM15.5251 6.6875L1.52515 6.6875V8.6875L15.5251 8.6875V6.6875Z"
        fill={fill}
      />
    </svg>
  );
}
