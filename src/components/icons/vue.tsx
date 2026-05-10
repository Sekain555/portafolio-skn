import type { SVGProps } from "react";

export function VueIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M22.2 4.4L12 21.8L1.8 4.4h4.9l5.3 9.4l5.3-9.4zM15.4 4.4h3.3L12 16L5.3 4.4H8.6l3.4 6.2z"
      ></path>
    </svg>
  );
}
