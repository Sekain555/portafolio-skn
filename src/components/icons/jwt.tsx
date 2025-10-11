import type { SVGProps } from "react";

export function JwtIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M16 16v2h-4v-2h4m-4-2v-2h4v2h-4m-2-2H8v6h2v-6m-2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2M2 6h2v12H2V6m3 0h1v12H5V6m15 0h2v12h-2V6m-3 0h1v12h-1V6z"
      ></path>
    </svg>
  );
}
