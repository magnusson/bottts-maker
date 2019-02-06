import React from 'react'

const Artuito = props => {
  return (
    <>
      <mask
        id="facemask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="130"
        height="120"
      >
        <path
          d="M0 65C0 29.1015 29.1015 0 65 0V0C100.899 0 130 29.1015 130 65V117.647C130 118.947 128.947 120 127.647 120H2.35294C1.05345 120 0 118.947 0 117.647V65Z"
          fill="white"
        />
      </mask>
      <g mask="url(#facemask)">
        <rect x="-1" y="-1" width="132" height="122" fill={props.color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 80H10V107H0V80Z"
          fill="#0040AE"
          fillOpacity="0.8"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 111H130V116H0V111Z"
          fill="#0040AE"
          fillOpacity="0.8"
        />
        <rect
          x="121"
          y="80"
          width="9"
          height="27"
          fill="#0040AE"
          fillOpacity="0.8"
        />
        <rect
          x="7.2998"
          y="8"
          width="54.9"
          height="16.1835"
          fill="#0040AE"
          fillOpacity="0.8"
        />
        <rect
          x="65.7998"
          y="8"
          width="54.9"
          height="16.1835"
          fill="#0040AE"
          fillOpacity="0.8"
        />
      </g>
    </>
  )
}
export default Artuito
