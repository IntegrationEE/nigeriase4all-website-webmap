import React from 'react';

function IconBuilding(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width*20/18}
        version="1.1"
        viewBox="0 0 4.762 5.292"
      >
        <g transform="translate(-87.264 -136.942)">
          <path
            fill={color}
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 1L1 8v11a2 2 0 002 2h4V11h6v10h4a2 2 0 002-2V8z"
            transform="matrix(.26458 0 0 .26458 87 136.677)"
          ></path>
        </g>
      </svg>
    )
}

export default IconBuilding;
