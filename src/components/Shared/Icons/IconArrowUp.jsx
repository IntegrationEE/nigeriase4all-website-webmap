import React from 'react';

function IconArrowUp(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
            xmlns="https://www.w3.org/2000/svg"
            width={width}
            height={width*0.57}
            version="1.1"
            viewBox="0 0 3.71 2.119"
        >
            <g transform="translate(-159.92 -211.274)">
            <path
                fill="none"
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M380 585L374 579 368 585"
                transform="matrix(.26458 0 0 .26458 62.82 58.344)"
            ></path>
            </g>
        </svg>
    )
}

export default IconArrowUp;
