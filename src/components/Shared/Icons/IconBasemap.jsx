import React from 'react';

function IconBasemap(props) {
    const {width="20", color="black"} = props;
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width*13/16}
      fill="none"
      viewBox="0 0 16 13"
    >
      <path
        fill={color}
        d="M4.444 0v10.667L.61 12.412A.445.445 0 010 12V2.38a.891.891 0 01.559-.825L4.444 0zm.89 0l5.333 1.778v10.667l-5.334-1.778V0zM15.39.032a.445.445 0 01.61.413v9.62a.89.89 0 01-.559.826l-3.885 1.553V1.778L15.39.032z"
      ></path>
    </svg>
    )
}

export default IconBasemap;
