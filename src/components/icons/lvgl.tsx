import type { SVGProps } from "react";

export function LvglIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M12 2L2 7v10l10 5l10-5V7zm-8 6l8 4.5V20L4 15.5zM5.5 8.3L12 12l6.5-3.7L12 4.6zm9.5 7.2V8l8-4.5v10z"
      ></path>
    </svg>
  );
}
