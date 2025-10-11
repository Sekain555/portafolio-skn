import type { SVGProps } from "react";

export function FastApiIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m-2.11 14.89L5 12l4.89-4.89L12 9.22zM12 14.78l-2.11-2.11l2.11-2.11L14.11 12.67zm4.89 2.11L12 12l4.89-4.89L19 12z"
      ></path>
    </svg>
  );
}
