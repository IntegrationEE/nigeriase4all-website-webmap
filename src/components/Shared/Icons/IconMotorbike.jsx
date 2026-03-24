import React from 'react';

function IconMotorbike(props) {
    const {width, height=width*34.524/54.743, color="#313131"} = props;

    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 54.743 34.524"
    >
      <g fill="none" stroke="none" transform="translate(-8.244 -22.846)">
        <path d="M39.222 36.977s-5.963 17.859-15.684-4.109c-1.264-2.855-1.627-7.54-1.584-6.955l-5.9 12.136c-.376.782-1.239 1.484-.41 1.747 9.818 3.116 10.563 9.618 10.522 11.757-.007.394 15.749.342 15.798 0 .453-3.167 3.464-17.566 19.856-6.224 1 .692-2.516-11.209-3.95-11.209 0 0-17.636.487-17.636 1.124l-1.012 1.733"></path>
        <ellipse
          cx="16.156"
          cy="50.893"
          strokeMiterlimit="10"
          strokeWidth="2"
          rx="5.476"
          ry="5.476"
          transform="rotate(-1.335 16.175 50.952)"
        ></ellipse>
        <circle
          cx="51.398"
          cy="50.893"
          r="5.476"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M40.436 29.516H58.861999999999995V35.184999999999995H40.436z"
        ></path>
      </g>
      <g
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-8.244 -22.846)"
      >
        <ellipse
          cx="16.156"
          cy="50.893"
          fill={color}
          fillOpacity="1"
          rx="5.476"
          ry="5.476"
          transform="rotate(-1.335 16.175 50.952)"
        ></ellipse>
        <circle
          cx="51.398"
          cy="50.893"
          r="5.476"
          fill={color}
          fillOpacity="1"
        ></circle>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M26.262 50.776a9.863 9.863 0 00-2.918-6.98c-3.89-3.874-10.2-3.874-14.09 0"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M61.697 50.776c0-5.48-4.442-9.921-9.922-9.921s-9.921 4.442-9.921 9.922"
        ></path>
        <path
          fill={color}
          fillOpacity="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M40.436 29.516H58.861999999999995V35.184999999999995H40.436z"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.9234 40.8547L23.4277 23.846 29.0973 23.846"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M26.262 50.893L41.854 50.893"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M40.436 35.185s-5.67 21.261-17.008 0"
        ></path>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M58.862 35.185s4.253 7.087 2.835 15.591"
        ></path>
      </g>
    </svg>
      );
}

export default IconMotorbike;
