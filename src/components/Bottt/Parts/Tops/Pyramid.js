import React from 'react'

const Pyramid = props => {
  return (
    <>
      <mask
        id="topmask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="18"
        y="8"
        width="64"
        height="44"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 8L82 52H18L50 8Z"
          fill="white"
        />
      </mask>
      <g mask="url(#topmask)">
        <rect width="100" height="52" fill={props.color} />
        <rect
          x="50"
          y="4"
          width="30"
          height="48"
          fill="white"
          fillOpacity="0.8"
        />
      </g>
    </>
  )
}
export default Pyramid
