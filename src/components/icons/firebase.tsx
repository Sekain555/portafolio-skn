import type { SVGProps } from "react";

export function FirebaseIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M5.1 4.2L4 5.3l.1 14.4l1.1.9l.2-14.3zM18.9 4.2L8.2 18.2l-1-1l11.7-15zM7 3.3L6.1 4l12.8 14.5l.8-.7zM19.9 5.3L9.2 19.3l1.1 1l10.7-14z"
      ></path>
    </svg>
  );
}
