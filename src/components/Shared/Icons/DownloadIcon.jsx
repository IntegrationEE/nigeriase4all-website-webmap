import React from "react";

function DownloadIcon({width,color}) {
  return (
    <svg
      xmlns="https://www.w3.org/2000/svg"
      // xmlnsOsb="http://www.openswatchbook.org/uri/2009/osb"
      xmlnsXlink="https://www.w3.org/1999/xlink"
      width={width}
      height="25"
      version="1.1"
      viewBox="0 0 6.615 6.615"
    >
      <defs>
        <linearGradient id="linearGradient824" >
          <stop offset="0" stopColor="#fff" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient826"
          x1="100.672"
          x2="101.201"
          y1="136.592"
          y2="136.592"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient824"
        ></linearGradient>
      </defs>
      <g
        fillRule="evenodd"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-97.403 -134.02)"
      >
        <path
          fill="none"
          strokeOpacity="1"
          strokeWidth="0.529"
          d="M98.423 138.709v.793c0 .293.237.53.53.53h3.703a.53.53 0 00.53-.53v-.793"
        ></path>
        <path
          fill="none"
          strokeOpacity="0.988"
          strokeWidth="2"
          d="M562 726L566 730 570 726"
          transform="matrix(.26458 0 0 .26458 -48.816 -54.702)"
        ></path>
        <path
          fill="url(#linearGradient826)"
          fillOpacity="1"
          strokeOpacity="1"
          strokeWidth="0.529"
          d="M100.937 134.74v3.704"
        ></path>
      </g>
    </svg>
  );
}

export default DownloadIcon;
