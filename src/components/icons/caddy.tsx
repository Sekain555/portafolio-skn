import type { SVGProps } from "react";

export function CaddyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M3.5 3h17A1.5 1.5 0 0 1 22 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 19.5v-15A1.5 1.5 0 0 1 3.5 3M9.13 8.35a1 1 0 1 0-1.6-1.2l-4.3 5.72a1 1 0 0 0 .8 1.6h2.53l-2.7 3.59a1 1 0 1 0 1.6 1.2l4.3-5.71a1 1 0 0 0-.8-1.6H7.44zM18.8 12.8a1 1 0 0 0-.8-1.6h-2.54l2.71-3.6a1 1 0 0 0-1.6-1.2l-4.3 5.72a1 1 0 0 0 .8 1.6h2.53l-2.7 3.6a1 1 0 1 0 1.6 1.2l4.3-5.72z"
      ></path>
    </svg>
  );
}
