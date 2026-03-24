import React from 'react';

function IconMobile(props) {
    const {width="14", color="#313131"} = props;

    return (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 72 72" height={width} width={width}
    >
        <g strokeMiterlimit="10">
            <path
            fill={color}
            fillOpacity="1"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M52.5 64.764h-33a1 1 0 01-1-1v-56a1 1 0 011-1h33a1 1 0 011 1v56a1 1 0 01-1 1z"
            ></path>
            <path
            fill="#fff"
            fillOpacity="1"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M48.034 55H23.966a.966.966 0 01-.966-.966V13.966c0-.534.433-.966.966-.966h24.068c.534 0 .966.432.966.966v40.068a.966.966 0 01-.966.966z"
            ></path>
            <circle
            cx="36"
            cy="60"
            r="2"
            fill="#fff"
            fillOpacity="1"
            stroke="#fff"
            strokeOpacity="1"
            ></circle>
            <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeWidth="2"
            d="M31 10L41 10 41 10 31 10z"
            ></path>
        </g>
        </svg>
    )
}

export default IconMobile;
