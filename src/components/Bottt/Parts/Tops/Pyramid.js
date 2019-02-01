import React from 'react'

const Pyramid = () => {
  return (
    <>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50 8L82 52H18L50 8Z"
        fill="#E1E6E8"
      />
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
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M50 8L82 52H18L50 8Z"
          fill="white"
        />
      </mask>
      <g mask="url(#topmask)">
        <rect width="100" height="52" fill="#90A4AE" />
        <rect
          x="50"
          y="4"
          width="30"
          height="48"
          fill="white"
          fill-opacity="0.8"
        />
      </g>
    </>
  )
}
export default Pyramid
