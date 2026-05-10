import type { SVGProps } from "react";

export function NextjsIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M9.8 18.9h1.7v-7.8l3.2 7.8h1.6V5h-1.7v7.7l-3.1-7.7H9.8zM22.5 5H24v13.9h-1.5z"
      ></path>
    </svg>
  );
}
