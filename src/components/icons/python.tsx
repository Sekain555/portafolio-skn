import type { SVGProps } from "react";

export function PythonIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="currentColor">
        <path d="M14.5 19.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
        <path
          fillRule="evenodd"
          d="M12 21a9 9 0 0 0 9-9h-4.5A4.5 4.5 0 0 1 12 16.5V21M3 12a9 9 0 0 1 9-9v4.5A4.5 4.5 0 0 0 7.5 12H3"
          clipRule="evenodd"
        ></path>
        <path d="M4.5 9.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
      </g>
    </svg>
  );
}
