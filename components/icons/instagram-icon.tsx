export const InstagramIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 120 120"
      fill="none"
    >
      <rect
        x="10"
        y="10"
        width="100"
        height="100"
        rx="20"
        fill="url(#gradient)"
      />
      <circle cx="60" cy="60" r="30" fill="white" />
      <circle cx="60" cy="60" r="20" fill="url(#gradient)" />
      <circle cx="85" cy="35" r="8" fill="white" />
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="120"
          y2="120"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F58529" />
          <stop offset="0.5" stopColor="#DD2A7B" />
          <stop offset="1" stopColor="#8134AF" />
        </linearGradient>
      </defs>
    </svg>
  );
};