import React from 'react';

function IconBus(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*(28.837/63.323)}
      version="1.1"
      viewBox="0 0 63.323 28.837"
    >
      <g fill="none" stroke="none" transform="translate(-4.677 -27.455)">
        <path d="M61.083 53.063l3.48-1H67l-.125-4.563h-.688s.626-17.625-1.75-18.5c-2.374-.875-27.687-.563-30.812 0S27 28.625 15.75 39.938L8 42.48s-1.5.833-1.563 5.207c0 0-.875.25-.75 1.5.117 1.165-.254 4.28 4.97 4.532"></path>
        <circle
          cx="16.48"
          cy="52.292"
          r="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <circle
          cx="55"
          cy="52.292"
          r="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <path d="M14.24 44.564s.086-1.078-1.29-1.203c-1.374-.125-3.897 1.203-4.038 1.563-.14.359-.349 1.432.281 1.625.63.192 5.047-1.985 5.047-1.985z"></path>
        <path d="M18.969 41.625c.375.02 10.219-.25 10.844-1.75s.625-7.438.625-7.438-5.237 1.8-7.407 3.97c-4 4-4.062 5.218-4.062 5.218z"></path>
        <path d="M34.063 32.938v7.556a1 1 0 001 1l21.77-.84a1 1 0 00.63-.223l2.167-1.756a1 1 0 00.37-.777l.706-4.96a1 1 0 00-1-1H35.062a1 1 0 00-1 1z"></path>
        <path d="M64.092 48h-2.434v-6.135h1.437c.55 0 .997.447.997.998z"></path>
      </g>
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-4.677 -27.455)"
      >
        <path
          fill="none"
          d="M61 52.136l3.563-.074H67l-.125-4.562h-.688s.626-17.625-1.75-18.5c-2.374-.875-27.687-.563-30.812 0S27 28.625 15.75 39.938L8 42.48s-1.5.833-1.563 5.207c0 0-.875.25-.75 1.5.117 1.165-.472 3.414 4.752 3.666"
        ></path>
        <path fill="none" d="M23.063 52.75L48.438 52.307"></path>
        <circle
          cx="16.48"
          cy="52.292"
          r="3"
          fill={color}
          fillOpacity="1"
        ></circle>
        <circle cx="55" cy="52.292" r="3" fill={color} fillOpacity="1"></circle>
        <path fill="none" d="M13.29 44.476s-1.964 1.659-3.576 1.918"></path>
        <path
          fill="none"
          d="M19.875 41.48c.375.02 9.313-.105 9.938-1.605s.625-6.5.625-6.5"
        ></path>
        <path
          fill="none"
          d="M35.063 40.654h21.77a1 1 0 00.63-.223l2.167-1.756a1 1 0 00.37-.777v-4.96"
        ></path>
        <path
          fill="none"
          d="M61.6577 42.849L61.6577 47.5988 63.1161 48.0481"
        ></path>
      </g>
    </svg>
      );
}

export default IconBus;
