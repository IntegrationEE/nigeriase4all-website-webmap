import React from 'react';

function IconHamburger(props) {
    const {width=20, color="#313131"} = props;
    return (
        <svg
            xmlns="https://www.w3.org/2000/svg"
            width={width}
            height={width*0.7}
            version="1.1"
            viewBox="0 0 5.299 3.704"
        >
            <g
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="0.529"
            transform="translate(-99.404 -160.588)"
            >
            <path d="M99.672 162.44h4.763"></path>
            <path d="M99.672 160.853h4.763"></path>
            <path d="M99.672 164.028h4.763"></path>
            </g>
        </svg>
    )
}

export default IconHamburger;
