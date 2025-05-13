interface LogoProps {
  size?: number;
}

export const Logo = ({
  size = 30,
}: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="20"
        y="10"
        width="60"
        height="80"
        rx="5"
        fill="oklch(0.442 0.103 268.305)"
        transform="translate(0, 5)"
      />
      <rect
        x="30"
        y="20"
        width="15"
        height="20"
        fill="white"
        transform="translate(0, 5)"
      />
      <rect
        x="55"
        y="20"
        width="15"
        height="20"
        fill="white"
        transform="translate(0, 5)"
      />
      <rect
        x="30"
        y="50"
        width="15"
        height="20"
        fill="white"
        transform="translate(0, 5)"
      />
      <rect
        x="55"
        y="50"
        width="15"
        height="20"
        fill="white"
        transform="translate(0, 5)"
      />
    </svg>
  );
};
