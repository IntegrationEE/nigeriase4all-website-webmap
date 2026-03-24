import React from 'react';

function IconBus(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*42/57}
      version="1.1"
      viewBox="0 0 57 42"
    >
      <g
        fill="none"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-7 -15)"
      >
        <path d="M15 16H35V56H15z"></path>
        <path d="M35 46L35 36 63 36 63 46"></path>
        <path d="M63 46L63 56 35 56 35 46"></path>
        <path d="M20 21H29V26H20z"></path>
        <path d="M35 18H52V28H35z"></path>
      </g>
      <g transform="translate(-7 -15)">
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M15 16H35V56H15z"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M35 46L35 36 63 36 63 46"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M63 46L63 56 35 56 35 46"
        ></path>
        <path
          fill={color}
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M20 21H29V26H20z"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M35 18H52V28H35z"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M41 21L46 21"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M41 24L46 24"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M10 34L10 30 9 28"
        ></path>
        <path
          fill={color}
          stroke="none"
          d="M8 37v-3.04c0-.528.45-.96 1-.96h2c.55 0 1 .432 1 .96V37"
        ></path>
        <path
          fill={color}
          stroke="none"
          d="M13 38c0 .55-.338 1-.75 1h-4.5c-.412 0-.75-.45-.75-1s.338-1 .75-1h4.5c.412 0 .75.45.75 1z"
        ></path>
        <path
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M12 52c-4-6-1-7-2-14"
        ></path>
      </g>
    </svg>

      );
}

export default IconBus;
