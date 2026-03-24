import React from 'react';

function IconMarker(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width*22/18}
        version="1.1"
        viewBox="0 0 4.762 5.821"
      >
        <g transform="translate(-75.156 -132.005)">
          <path
            fill={color}
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 1a9 9 0 00-9 9c0 7 9 13 9 13s9-6 9-13a9 9 0 00-9-9zm0 6a3 3 0 013 3 3 3 0 01-3 3 3 3 0 01-3-3 3 3 0 013-3z"
            transform="matrix(.26458 0 0 .26458 74.891 131.74)"
          ></path>
        </g>
      </svg>
    )
}

export default IconMarker;
