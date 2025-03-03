import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 200"
      {...props}
    >
      <title>Numerology Logo</title>
      {/* Sacred geometry circle */}
      <circle
        cx="100"
        cy="100"
        r="90"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Inner hexagon */}
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        d="M100 20L173.2 60L173.2 140L100 180L26.8 140L26.8 60Z"
      />
      {/* Mystical numbers */}
      <text
        x="70"
        y="90"
        fill="currentColor"
        fontSize="24"
        fontFamily="serif"
      >
        3 6 9
      </text>
      <text
        x="70"
        y="120"
        fill="currentColor"
        fontSize="24"
        fontFamily="serif"
      >
        1 2 8
      </text>
      {/* Center star */}
      <path
        fill="currentColor"
        d="M100 60L110 90L140 90L115 110L125 140L100 120L75 140L85 110L60 90L90 90Z"
      />
    </svg>
  );
}
