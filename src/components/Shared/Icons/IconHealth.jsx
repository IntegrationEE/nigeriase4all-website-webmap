import React from 'react';

function IconHealth(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 72 72" width={width} height={width}>
      <g>
        <path
          fill="#fff"
          fillOpacity="1"
          strokeWidth="1.553"
          d="M53.87 20.06H18.13l-2.692 4.478a8.592 8.592 0 00-1.228 4.427v25.94a5.142 5.142 0 005.143 5.142h33.3a5.143 5.143 0 005.143-5.142v-25.94c0-1.56-.425-3.09-1.228-4.427z"
        ></path>
        <path
          fill="#d0cfce"
          strokeWidth="1.553"
          d="M18.16 11.95H53.8V19.866999999999997H18.16z"
        ></path>
        <path
          fill="#D22F27"
          d="M37.97 45.01L37.97 40.28 42.7 40.28 42.7 36.95 37.97 36.95 37.97 32.22 34.64 32.22 34.64 36.95 29.91 36.95 29.91 40.28 34.64 40.28 34.64 45.01z"
          transform="translate(-19.92 -19.92) scale(1.553)"
        ></path>
        <path
          fill={color}
          fillOpacity="1"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="M34.64 32.22L34.64 36.95 29.91 36.95 29.91 40.28 34.64 40.28 34.64 45.01 37.97 45.01 37.97 40.28 42.7 40.28 42.7 36.95 37.97 36.95 37.97 32.22z"
          transform="translate(-19.92 -19.92) scale(1.553)"
        ></path>
      </g>
      <g
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.766"
      >
        <path
          fill="none"
          d="M53.9 20.04H18.1l-2.696 4.485a8.606 8.606 0 00-1.23 4.434v25.98a5.15 5.15 0 005.151 5.151h33.35a5.15 5.15 0 005.151-5.151v-25.98a8.61 8.61 0 00-1.23-4.434z"
        ></path>
        <path
          fill="#fff"
          fillOpacity="1"
          d="M18.14 11.91H53.84V19.839H18.14z"
        ></path>
        <path fill="none" d="M24.06 11.91L24.06 19.84"></path>
        <path fill="none" d="M30.03 11.91L30.03 19.84"></path>
        <path fill="none" d="M36 11.91L36 19.84"></path>
        <path fill="none" d="M41.97 11.91L41.97 19.84"></path>
        <path fill="none" d="M47.94 11.91L47.94 19.84"></path>
      </g>
    </svg>
      );
}

export default IconHealth;
