import React from 'react';

function IconLayers(props) {
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
            d="M.436 5.204l8.19 3.715a.9.9 0 00.748 0l8.189-3.715c.582-.264.582-1.143 0-1.407L9.374.08a.904.904 0 00-.748 0L.436 3.797c-.581.264-.581 1.143 0 1.407zm17.128 3.103l-2.043-.925-5.682 2.576a2.023 2.023 0 01-1.678 0L2.479 7.382l-2.043.925c-.581.264-.581 1.143 0 1.407l8.19 3.712a.907.907 0 00.748 0l8.19-3.712c.581-.264.581-1.143 0-1.407zm0 4.494l-2.035-.923-5.69 2.58a2.023 2.023 0 01-1.678 0l-5.69-2.58-2.035.923c-.581.263-.581 1.142 0 1.406l8.19 3.712a.907.907 0 00.748 0l8.19-3.712c.581-.264.581-1.143 0-1.406z"
          ></path>
        </g>
      </svg>
    )
}

export default IconLayers;
