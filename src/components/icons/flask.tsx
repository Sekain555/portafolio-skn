import type { SVGProps } from "react";

export function FlaskIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M14.6 4c-1.2-1.3-2.8-2-4.6-2s-3.4.7-4.6 2c-2.2 2.3-2.2 6.1 0 8.5l4.6 4.7l4.6-4.7c2.2-2.4 2.2-6.2 0-8.5M10 13.8L7.5 11C6.5 9.8 6.5 7.9 7.7 6.7c.6-.6 1.3-.9 2.3-.9s1.7.3 2.3.9c1.2 1.2 1.2 3.1 0 4.3zm8.3 4.7l-1.9-1.9c-2.2-2.3-2.2-6.1 0-8.5c1.2-1.2 2.8-1.9 4.6-1.9v2c-1.2 0-2.3.5-3.2 1.4c-1.7 1.8-1.7 4.7 0 6.5l1.5 1.5z"
      ></path>
    </svg>
  );
}
