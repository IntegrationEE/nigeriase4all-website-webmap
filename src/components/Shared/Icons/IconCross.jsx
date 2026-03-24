import React from 'react';

function IconCross(props) {
    const {width="18", color='#eeeff1'} = props;
    return (
        <svg
        xmlns="https://www.w3.org/2000/svg"
        width={width}
        height={width}
        version="1.1"
        viewBox="0 0 3.711 3.71"
      >
        <g
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="0.529"
          transform="translate(-125.9 -140.93)"
        >
          <path d="M129.342 141.198l-3.175 3.175"></path>
          <path
            fill={color}
            fillOpacity="0"
            d="M126.169 141.198l3.175 3.175"
          ></path>
        </g>
      </svg>
    )
}

export default IconCross;
