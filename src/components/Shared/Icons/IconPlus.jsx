import React from 'react';

function IconPlus(props) {
    const {width="16", color="black"} = props;
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill={color}
        d="M8.572 0c.63 0 1.142.512 1.142 1.143v5.142h5.144c.63 0 1.142.512 1.142 1.143v1.144c0 .63-.512 1.143-1.142 1.143H9.714v5.142c0 .63-.512 1.143-1.142 1.143H7.428c-.63 0-1.142-.512-1.142-1.143V9.715H1.142C.512 9.715 0 9.203 0 8.572V7.428c0-.63.512-1.143 1.142-1.143h5.144V1.143C6.286.513 6.798 0 7.428 0h1.144z"
      ></path>
    </svg>
    )
}

export default IconPlus;
