import React from 'react';

function IconShoe(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*27.479/64.741}
      version="1.1"
      viewBox="0 0 64.741 27.479"
    >
      <g
        fill={color}
        fillOpacity="1"
        stroke="none"
        transform="translate(-3 -27.521)"
      >
        <path d="M7.682 50.464A10.082 10.082 0 014 42.664c0-2.79 1.13-12.315 2.959-14.143 0 0 16.438 9.125 29.045 0L48.478 36s6.755.827 11.63 1.256c4.892.43 6.633 4.93 6.633 7.633 0 8.652-13.338 7.223-20.065 6.855l-13.268-.724-20.713-.32z"></path>
        <path
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M7.682 50.464A10.082 10.082 0 014 42.664c0-2.79 1.13-12.315 2.959-14.143 0 0 16.438 9.125 29.045 0L48.478 36s6.755.827 11.63 1.256c4.892.43 6.633 4.93 6.633 7.633 0 8.652-13.338 7.223-20.065 6.855l-13.268-.724z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M11 50.7H27.544V54H11z"
        ></path>
      </g>
      <g
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-3 -27.521)"
      >
        <path
          fill={color}
          fillOpacity="1"
          stroke={color}
          d="M7.682 50.464A10.082 10.082 0 014 42.664c0-2.79 1.13-12.315 2.959-14.143 0 0 16.438 9.125 29.045 0L48.478 36s6.755.827 11.63 1.256c4.892.43 6.633 4.93 6.633 7.633 0 8.652-13.338 7.223-20.065 6.855l-13.268-.724"
        ></path>
        <path fill="none" stroke={color} d="M11 50.7H27.544V54H11z"></path>
        <path
          fill="none"
          stroke="#fff"
          strokeOpacity="1"
          d="M37.097 33.385L34.328 35.296"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeOpacity="1"
          d="M40.662 35.248L37.893 37.159"
        ></path>
        <path
          fill="none"
          stroke="#fff"
          strokeOpacity="1"
          d="M44.227 37.111L41.458 39.023"
        ></path>
      </g>
    </svg>
      );
}

export default IconShoe;
