import React from 'react';

function IconShopping(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.1"
      viewBox="0 0 52 55.958"
    >
      <g
        fill={color}
        fillOpacity="1"
        stroke="none"
        transform="translate(-10.002 -6.002)"
      >
        <path d="M25.747 21.001L36.001 21.001"></path>
        <path d="M36.0015 60.9598L61.0015 60.9598 56.0015 20.0932 53.4318 20.0932 18.5712 20.0932 16.0015 20.0932 11.0015 60.9598 36.0015 60.9598"></path>
        <path d="M46.256 21.001L36.002 21.001"></path>
      </g>
      <g
        fill={color}
        fillOpacity="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-10.002 -6.002)"
      >
        <path
          fill={color}
          d="M36.0015 60.9598L11.0015 60.9598 16.0015 21.0015 18.5712 21.0015"
        ></path>
        <path fill={color} d="M25.747 21.001L36.001 21.001"></path>
        <path
          fill={color}
          d="M36.0015 60.9598L61.0015 60.9598 56.0015 21.0015 53.4318 21.0015"
        ></path>
        <path fill={color} d="M46.256 21.001L36.002 21.001"></path>
        <path
          fill="none"
          d="M22.049 27.662v-6.62c0-7.754 6.286-14.04 14.04-14.04 7.755 0 14.041 6.286 14.041 14.04v6.62"
        ></path>
      </g>
    </svg>
      );
}

export default IconShopping;
