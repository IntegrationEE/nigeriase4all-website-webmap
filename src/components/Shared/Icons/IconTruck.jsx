import React from 'react';

function IconTruck(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*(30.94/64.476)}
      version="1.1"
      viewBox="0 0 64.476 30.94"
    >
      <g fill="none" stroke="none" transform="translate(-3.774 -26.31)">
        <path d="M10.34 52.88H5.86a1 1 0 01-1-.99l-.086-7.277a2.992 2.992 0 01.313-1.37c.264-.53.6-1.201.64-1.254a.95.95 0 00.136-.248c.168-.457.763-2.189 2.197-7.361 1.45-5.23 10.53-5.92 13.61-6a1 1 0 011.02 1v22.5c0 .32-.003.745-.003.745"></path>
        <path d="M44.625 52.19H26.19V28.31c0-.55.45-1 1-1h39.06c.55 0 1 .45 1 1v21.88c0 .55-.81 1.968-1.36 1.968l-7.75.032"></path>
        <circle
          cx="16.333"
          cy="53.25"
          r="3"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <path d="M9.833 41l5.875.02.125-6.895-3.194.068a1 1 0 00-.934.707L9.833 41"></path>
        <circle
          cx="57.417"
          cy="53.25"
          r="3"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <circle
          cx="48.417"
          cy="53.25"
          r="3"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
      </g>
      <g
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-3.774 -26.31)"
      >
        <circle
          cx="16.333"
          cy="53.25"
          r="3"
          fill={color}
          fillOpacity="1"
        ></circle>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.75 41L15.8333 41 15.8333 35.0833"
        ></path>
        <circle
          cx="57.417"
          cy="53.25"
          r="3"
          fill={color}
          fillOpacity="1"
        ></circle>
        <circle
          cx="48.417"
          cy="53.25"
          r="3"
          fill={color}
          fillOpacity="1"
        ></circle>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.34 51.88H5.86a1 1 0 01-1-.99l-.086-6.277a2.992 2.992 0 01.313-1.37c.264-.53.6-1.201.64-1.254.058-.077.899-2.437 2.333-7.609 1.45-5.23 10.53-5.92 13.61-6a1 1 0 011.02 1v21.5c0 .32-.003.745-.003.745"
        ></path>
        <path
          fill={color}
          fillOpacity="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M42.625 51.19H26.19V28.31c0-.55.45-1 1-1h39.06c.55 0 1 .45 1 1v21.88c0 .55-.45 1-1 1h-3.11"
        ></path>
      </g>
    </svg>
      );
}

export default IconTruck;
