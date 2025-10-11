import type { SVGProps } from "react";

export function GitIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M21.5 10.15L13.85 2.5L12 4.36l1.85 1.85A6.84 6.84 0 0 0 8 5a7 7 0 0 0-2.3.42l1.43 1.43A5 5 0 0 1 12 5a4.87 4.87 0 0 1 3.12 1.12L13.5 7.74l1.43 1.43l2.87-2.87l-.37.38l3.62 3.61l-1.05 1.05V8.5H18v4.84l1.45-1.45zM8 8a5 5 0 0 0-5 5c0 2.14 1.34 4 3.25 4.75L7.7 16.3A3 3 0 0 1 6 13a3 3 0 0 1 3-3a2.9 2.9 0 0 1 2.3.9L9.85 12.35A.48.48 0 0 0 10 12a2 2 0 1 0-2 2a.48.48 0 0 0 .35-.15l1.45-1.45A2.9 2.9 0 0 1 9 15a3 3 0 0 1-3-3a3 3 0 0 1 .7-1.8l-1.45-1.45A5 5 0 0 0 8 8"
      ></path>
    </svg>
  );
}
