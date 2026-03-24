import React from "react";

function IconWarning({width, color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*18/21}
      version="1.1"
      viewBox="0 0 5.556 4.762"
    >
      <g transform="translate(-130.215 -107.962)">
        <path
          fill={color}
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.496 1c-.702 0-1.354.363-1.719.957h.004L1.27 16.017a1.973 1.973 0 00-.008 1.98A2.011 2.011 0 002.984 19H20.01a2.014 2.014 0 001.724-1.004 1.964 1.964 0 00-.007-1.978L13.215 1.957A2.014 2.014 0 0011.496 1zm-.017 5.47a1 1 0 011.019 1.012v4.002a1 1 0 11-2 0V7.482a1 1 0 01.98-1.011zm-.079 7.79a1 1 0 01.096 0 1 1 0 010 2 1.001 1.001 0 01-.096-2z"
          transform="matrix(.26458 0 0 .26458 129.95 107.698)"
        ></path>
      </g>
    </svg>
  );
}

export default IconWarning;
