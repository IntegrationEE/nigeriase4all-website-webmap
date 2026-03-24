import React from 'react';

function IconNetworkSignal(props) {
    const {width="14", color="#313131", invert=false, fill='#fff'} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.1"
      viewBox="0 0 49.999 50"
    >
      <g
        fill={invert?color:fill}
        fillOpacity="1"
        stroke="none"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-11 -11)"
      >
        <path d="M12 51H17V60H12z"></path>
        <path d="M22.75 41H27.75V60H22.75z"></path>
        <path d="M33.5 31H38.5V59.998999999999995H33.5z"></path>
        <path d="M44.25 21H49.25V59.999H44.25z"></path>
        <path d="M55 12H60V60H55z"></path>
      </g>
      <g
        fill={invert?color:fill}
        fillOpacity="1"
        stroke={color}
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-11 -11)"
      >
        <path d="M12 51H17V60H12z"></path>
        <path d="M22.75 41H27.75V60H22.75z"></path>
        <path d="M33.5 31H38.5V59.998999999999995H33.5z"></path>
        <path d="M44.25 21H49.25V59.999H44.25z"></path>
        <path d="M55 12H60V60H55z"></path>
      </g>
    </svg>
      );
}

export default IconNetworkSignal;
