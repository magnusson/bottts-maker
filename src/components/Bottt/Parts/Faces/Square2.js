import React from 'react'

const Square2 = props => {
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
          d="M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V82C130 102.987 112.987 120 92 120H38C17.0132 120 0 102.987 0 82V12Z"
          fill="white"
        />
      </mask>
      <g mask="url(#facemask)">
        <rect x="-2" y="-2" width="134" height="124" fill={props.color} />
      </g>
    </>
  )
}
export default Square2
