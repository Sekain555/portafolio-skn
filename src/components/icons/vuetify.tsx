import type { SVGProps } from "react";

export function VuetifyIcon(props: SVGProps<SVGSVGElement>) {
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
        d="m12 14.34l5.36-9.29H12zm0-11.8L3.63 20.47h4.09l4.28-7.42zm7.91 17.93H20.4l-4.28-7.41L12 12.56z"
      ></path>
    </svg>
  );
}
