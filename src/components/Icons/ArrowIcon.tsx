export const ArrowIcon = ({
  color,
  width,
  height,
  isRight,
}: {
  color: string;
  width: string;
  height: string;
  isRight?: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230.42 23.07"
      fill={color}
      width={width}
      height={height}
      className={`${isRight ? "rotate-[180deg]" : ""}`}
    >
      <polygon points="49.54 10.54 230.42 10.54 230.42 12.54 49.54 12.54 49.54 23.07 0 11.54 49.54 0 49.54 10.54" />
    </svg>
  );
};
