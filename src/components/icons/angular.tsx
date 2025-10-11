import type { SVGProps } from "react";

export function AngularIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2L3 4.5l1.5 13.5L12 22l7.5-4L21 4.5zm0 2.45L17.5 6l-.8 7H12zm-5.45 1.55H12L9.25 13H8.5z"
      ></path>
    </svg>
  );
}
