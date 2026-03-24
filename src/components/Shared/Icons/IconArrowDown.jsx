import React from 'react';

function IconArrowDown(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
            xmlns="https://www.w3.org/2000/svg"
            width={width}
            height={width*0.57}
            version="1.1"
            viewBox="0 0 3.71 2.119"
            >
            <g transform="translate(-64.67 -145.506)">
                <path
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M224 579L230 585 236 579"
                transform="matrix(.26458 0 0 .26458 5.67 -7.42)"
                ></path>
            </g>
        </svg>
    )
}

export default IconArrowDown;
