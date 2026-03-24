import React from 'react';

function IconCar(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*(27.5/62.447)}
      version="1.1"
      viewBox="0 0 62.447 27.5"
    >
      <g
        fill="#fff"
        fillOpacity="1"
        stroke="none"
        transform="translate(-5 -28.9)"
      >
        <path d="M64.8 44l-1.1-.6c-.4-.2-.6-.6-.5-1 .3-1.9.5-8.5-9.7-11.5-.2-.1-.4-.1-.6-.1l-19.6.1c-.4 0-.8.1-1.1.3l-10.3 6.9c-.2.1-.4.2-.6.2-1.9-.1-3.7.1-5.6.4-5.4 1.1-7.6 4-8.4 5.5-.2.3-.2.7-.2 1 .1 2.4-1.5 5.1.9 7.3l19.4-.1 20.4-.5 16.1-.2c.9-.1 2.4-1.4 2.8-2.2 1.7-2.7-1.7-5.4-1.9-5.5z"></path>
        <path d="M17.3 46.4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
        <path d="M57.1 46.4c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path>
        <path d="M56.1 39.3V35c0-.9-.8-1.7-1.7-1.7H33.2c-.1 0-.2 0-.2.1l-8 5.7c-.2.1-.2.4-.1.6.1.1.2.2.3.2 5.6 0 27.2-.2 30.4-.1.3 0 .5-.2.5-.5 0 .1 0 .1 0 0z"></path>
        <path d="M10.8 45L5.8 45.1 8.9 40.5 12.9 42.1z"></path>
      </g>
      <g
        fill="#fff"
        fillOpacity="1"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        transform="translate(-5 -28.9)"
      >
        <path fill="#fff" d="M47.6 51L27 51.4"></path>
        <path
          fill="#fff"
          d="M8.1 51.4c-.9-.2-1.7-.5-1.8-1-.1-1-.3-3.8-.3-5.1 0-.5.1-1.1.4-1.5 1.1-2 4.8-6.8 14.9-6.4l10.3-6.9c.5-.3 1.1-.5 1.6-.5l19.6-.1c.3 0 .6 0 .9.1 2.2.6 11.7 4 10.4 12.6l1.1.6c.5.2.9.7 1 1.2.4 1.4.3 2.9-.2 4.3"
        ></path>
        <path fill="#fff" d="M24.9 39.9L55.1 39.7 55.1 35.2"></path>
        <circle cx="17.3" cy="50.4" r="5" fill={color}></circle>
        <circle cx="57.1" cy="50.4" r="5" fill={color}></circle>
        <path fill="#fff" d="M12.3 42.9L10.5 45.1 6.8 45"></path>
      </g>
    </svg>
      );
}

export default IconCar;
