import React from 'react';

function IconArrowDownLong(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width*19/14}
            fill="none"
            viewBox="0 0 14 19"
        >
            <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1v16.288M13 11.5l-6 6.108L1 11.5"
            ></path>
        </svg>
    )
}

export default IconArrowDownLong;
