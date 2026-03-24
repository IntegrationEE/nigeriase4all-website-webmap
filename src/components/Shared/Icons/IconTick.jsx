import React from 'react';

function IconTick(props) {
    const {width, color='#57c494'} = props;
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
        d="M8 0a8 8 0 110 16A8 8 0 018 0zm3.55 4.84L6.71 9.683l-2.26-2.26a.516.516 0 00-.73 0l-.73.73a.516.516 0 000 .729l3.355 3.355a.516.516 0 00.73 0l5.935-5.935a.517.517 0 000-.73l-.73-.73a.516.516 0 00-.73 0z"
      ></path>
    </svg>
    )
}

export default IconTick;
