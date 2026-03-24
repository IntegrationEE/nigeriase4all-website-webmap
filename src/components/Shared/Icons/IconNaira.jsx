import React from 'react';

function IconNaira(props) {
    const {width="14", color="#313131"} = props;

    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 196.24 196.24"
        width={width}
        height={width}
        >
            <g stroke={color} strokeLinecap="round" strokeMiterlimit="10">
                <g fill={color}>
                <path strokeWidth="16" d="M24.52 78.67h145.2"></path>
                <path strokeWidth="16" d="M24.52 113.12h145.2"></path>
                <g strokeWidth="19.309" transform="translate(-2.079 -2.91)">
                    <path d="M64.577 145.515l.149-94.79"></path>
                    <path d="M136.296 146.763l.149-94.791"></path>
                    <path d="M136.296 146.763l-71.57-96.038"></path>
                </g>
                </g>
                <circle
                cx="98.12"
                cy="98.12"
                r="93.12"
                fill="none"
                strokeWidth="10"
                ></circle>
            </g>
        </svg>
    )
}

export default IconNaira;
