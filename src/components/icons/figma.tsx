import type { SVGProps } from "react";

export function FigmaIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M15.5 2.5a3.5 3.5 0 0 0-3.5 3.5v3.5h3.5a3.5 3.5 0 1 0 0-7m-7 0a3.5 3.5 0 1 0 0 7h3.5V6a3.5 3.5 0 0 0-3.5-3.5m0 10.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 3.5-3.5v-3.5z"
      ></path>
      <path
        fill="currentColor"
        d="M8.5 16.5a3.5 3.5 0 0 0 3.5 3.5a3.5 3.5 0 1 0-3.5-3.5"
      ></path>
    </svg>
  );
}
