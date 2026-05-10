import type { SVGProps } from "react";

export function ArduinoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2M8 11H6v2h2zm2 0h2v2h-2zm6 0h-2v2h2z"
      ></path>
    </svg>
  );
}
