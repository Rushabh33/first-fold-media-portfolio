export function ListIcon({
  classNames,
  width = '8',
  height = '8',
  fill = '#FF3100',
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
      viewBox="0 0 8 8"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="2"
        transform="matrix(-1 0 0 1 8 0)"
        fill={fill}
      />
    </svg>
  );
}
