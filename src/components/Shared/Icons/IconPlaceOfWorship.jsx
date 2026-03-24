import React from 'react';

function IconPlaceOfWorship(props) {
  const { width = "14", color = "#313131" } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      version="1.1"
      viewBox="0 0 52.025 52.134"
    >
      <g
        fill={color}
        fillOpacity="1"
        stroke="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        transform="translate(-9.988 -9.83)"
      >
        <circle
          cx="32.02"
          cy="25.04"
          r="3"
          stroke="none"
          strokeWidth="1.8"
        ></circle>
        <path
          stroke={color}
          strokeOpacity="1"
          strokeWidth="1.8"
          d="M47.859 53.59l-1.98 3.87c.63.07 1.46.39 1.46 1.57 0 1.91-1.82 1.93-1.82 1.93l-13.31-.02s-5.72.61-5.72-4.62c0-5.05 5.31-5.14 5.7-5.14h7.27c.34-2.542-2.384-10.6-4.74-7.499-.341.45-2.371 2.349-3.271 2.87-2.74 1.584-9.22-3.191-8.526-6.356.095-.434 4.15 5.601 6.753 4.617 1.253-.474 3.043-4.682 3.338-5.609.52-2.37 1.548-5.702 4.537-7.072 5.23-2.41 14.21 14.38 10.31 21.46z"
        ></path>
        <path
          stroke="none"
          strokeWidth="2"
          d="M38.46 51.18l-.11-.26.08.07c.02.12.03.19.03.19z"
        ></path>
        <path
          stroke="none"
          strokeWidth="2"
          d="M38.46 51.18l-.11-.26.08.07.02.02c.01.06.01.11.01.17z"
        ></path>
      </g>
      <g
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        transform="translate(-9.988 -9.83)"
      >
        <path d="M11 25.04L36 10.83 61 24.47"></path>
        <circle cx="32.02" cy="25.04" r="3"></circle>
        <path d="M36.54 43.58c2.15 2.33 2.92 7.6 2.92 7.6l-6.848-.002s-6.124-.094-6.124 5.138 5.724 4.624 5.724 4.624l13.31.022s1.824-.022 1.824-1.932-2.171-1.563-2.171-1.563h-8.004l-5.206-1.39"></path>
        <path d="M23.29 39.46s2.67 4.92 6.02 4.92c3.35 0 1.649-9.221 8.239-12.25 5.227-2.407 14.21 14.38 10.31 21.46"></path>
      </g>
    </svg>
  )
}

export default IconPlaceOfWorship;
