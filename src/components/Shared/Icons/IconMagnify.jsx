import React from 'react';

function IconMagnify(props) {
    const {width="18", color='#313131'} = props;

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
            d="M17.756 15.565l-3.507-3.505a.844.844 0 00-.597-.247h-.573a7.28 7.28 0 001.547-4.5A7.312 7.312 0 007.313 0 7.312 7.312 0 000 7.313a7.312 7.312 0 007.313 7.313 7.28 7.28 0 004.5-1.547v.573c0 .225.089.44.247.597l3.505 3.507a.84.84 0 001.192 0l.995-.996c.33-.33.33-.865.004-1.195zM7.313 11.813c-2.485 0-4.5-2.01-4.5-4.5 0-2.486 2.011-4.5 4.5-4.5 2.485 0 4.5 2.01 4.5 4.5 0 2.485-2.01 4.5-4.5 4.5z"
          ></path>
        </g>
      </svg>
    )
}

export default IconMagnify;
