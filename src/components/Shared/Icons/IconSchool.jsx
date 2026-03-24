import React from 'react';

function IconSchool(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 72 72" width={width} height={width}>
      <g
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path fill="#9b9b9a" d="M41 56a5 5 0 01-10 0"></path>
        <path
          fill="#d0cfce"
          d="M67.001 56H4.998A.998.998 0 014 55.002V16.998c0-.551.447-.998.998-.998h62.004c.551 0 .998.447.998.998v38.004a.998.998 0 01-.999.998z"
        ></path>
        <path
          fill="#FFF"
          d="M64.001 51.625H7.998A.998.998 0 017 50.627V21.372c0-.55.447-.998.999-.998H64c.552 0 .999.447.999.998v29.253a.998.998 0 01-.999.999z"
        ></path>
      </g>
      <g
        fill={color}
        fillOpacity="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path fill={color} d="M41 56a5 5 0 01-10 0"></path>
        <path
          fill={color}
          d="M67.001 56H4.998A.998.998 0 014 55.002V16.998c0-.551.447-.998.998-.998h62.004c.551 0 .998.447.998.998v38.004a.998.998 0 01-.999.998z"
        ></path>
        <path
          fill="#fff"
          d="M64.001 51.625H7.998A.998.998 0 017 50.627V21.372c0-.55.447-.998.999-.998H64c.552 0 .999.447.999.998v29.253a.998.998 0 01-.999.999z"
        ></path>
        <path fill={color} d="M36 17L36 55"></path>
        <path fill={color} d="M11 27L31 27"></path>
        <path fill={color} d="M11 33L31 33"></path>
        <path fill={color} d="M11 39L31 39"></path>
        <path fill={color} d="M11 45L31 45"></path>
        <path fill={color} d="M41 27L61 27"></path>
        <path fill={color} d="M41 33L61 33"></path>
        <path fill={color} d="M41 39L61 39"></path>
        <path fill={color} d="M41 45L61 45"></path>
      </g>
    </svg>
      );
}

export default IconSchool;
