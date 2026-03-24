import React from 'react';

function IconFilter(props) {
    const {width=18, color='#313131'} = props;

    return (
        <svg
        xmlns="https://www.w3.org/2000/svg"
        width={width}
        height={width}
        viewBox="0 0 18 18"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <path
            fill={color}
            fillRule="nonzero"
            d="M17.155 0H.845C.095 0-.283.91.248 1.44L6.75 7.943v7.245c0 .275.134.533.36.69l2.812 1.969a.844.844 0 001.328-.691V7.943l6.502-6.503c.53-.53.154-1.44-.597-1.44z"
          ></path>
        </g>
      </svg>
    )
}

export default IconFilter;
