import type { SVGProps } from "react";

export function IonicIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m4.167 13.344a.625.625 0 0 1-.62.62H8.453a.625.625 0 0 1-.62-.62V8.656a.625.625 0 0 1 .62-.62h7.094a.625.625 0 0 1 .62.62z"
      ></path>
      <circle cx="12" cy="5.812" r="1.042" fill="currentColor"></circle>
    </svg>
  );
}
