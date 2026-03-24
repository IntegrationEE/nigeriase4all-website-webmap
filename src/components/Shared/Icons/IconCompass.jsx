import React from 'react';

function IconCompass(props) {
    const {width="24", color="#313131"} = props;
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.1"
      viewBox="0 0 5.818 5.818"
    >
      <g transform="translate(-120.311 -158.776)">
        <path
          fill={color}
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="0.529"
          d="M121.35 159.814a2.646 2.646 0 103.741 3.741 2.646 2.646 0 00-3.742-3.741zm1.682.188a.265.265 0 01.425.067l.748 1.497a.265.265 0 010 .237l-.748 1.497a.265.265 0 01-.474 0l-.748-1.497a.265.265 0 010-.237l.748-1.497a.254.254 0 01.049-.067z"
        ></path>
      </g>
    </svg>

    );
}

export default IconCompass;
