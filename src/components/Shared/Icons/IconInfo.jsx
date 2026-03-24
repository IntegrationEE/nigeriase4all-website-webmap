import React from 'react';

function IconInfo(props) {
    const {color = "#313131", width = "22"} = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={width}
            viewBox="0 0 16 16"
        >
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g>
                <path fill={color} d="M8 16A8 8 0 108 0a8 8 0 000 16z"></path>
                <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 11.2L8 8"
                ></path>
                <path
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4.8L8 4"
                ></path>
            </g>
            </g>
        </svg>
    )
}

export default IconInfo;
