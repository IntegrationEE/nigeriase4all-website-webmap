import React from 'react';

function IconMinus(props) {
    const {width="16", color="black"} = props;
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*4/16}
      fill="none"
      viewBox="0 0 16 4"
    >
      <path
        fill={color}
        d="M14.858 0C15.488 0 16 .528 16 1.179v1.179c0 .65-.512 1.177-1.142 1.177H1.143C.512 3.535 0 3.007 0 2.358v-1.18C0 .529.512 0 1.143 0h13.715z"
      ></path>
    </svg>
    )
}

export default IconMinus;
