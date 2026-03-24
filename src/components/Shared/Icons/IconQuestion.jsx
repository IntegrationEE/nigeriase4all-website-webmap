import React from 'react';

function IconQuestion(props) {
    const {width="14", color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.1"
      viewBox="0 0 5.292 5.292"
    >
      <g transform="translate(-94.116 -177.937)">
        <path
          fill={color}
          fillOpacity="1"
          fillRule="evenodd"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="1"
          strokeWidth="2"
          d="M10 0A10 10 0 000 10a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0010 0zm-.129 4.004c.24-.002.484.016.727.057 1.945.324 3.405 1.984 3.402 3.941 0 1.514-1.1 2.504-2 3.086-.9.582-1.78.863-1.78.863a1 1 0 11-.613-1.904s.663-.218 1.307-.635C11.558 8.995 12 8.486 12 8.002c.001-.966-.706-1.8-1.729-1.97-1.022-.171-2 .397-2.332 1.314a1 1 0 01-1.882-.68C6.64 5.055 8.19 4.02 9.87 4.004zM10 14.088a1 1 0 010 2 1 1 0 010-2z"
          transform="matrix(.26458 0 0 .26458 94.116 177.937)"
        ></path>
      </g>
    </svg>
      );
}

export default IconQuestion;
