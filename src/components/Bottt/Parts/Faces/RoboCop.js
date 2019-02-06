import React from 'react'

const RoboCop = props => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.48779 17.4723C0 24.3175 0 33.2783 0 51.2V79.5858H4V104C4 112.837 11.1634 120 20 120H110C118.837 120 126 112.837 126 104V79.5858H130V51.2C130 33.2783 130 24.3175 126.512 17.4723C123.444 11.4511 118.549 6.55574 112.528 3.48779C105.683 0 96.7217 0 78.8 0H51.2C33.2783 0 24.3175 0 17.4723 3.48779C11.4511 6.55574 6.55574 11.4511 3.48779 17.4723Z"
          fill="white"
        />
      </mask>
      <g mask="url(#facemask)">
        <rect x="-2" width="134" height="120" fill={props.color} />
        <rect
          x="4"
          y="80"
          width="122"
          height="40"
          fill="black"
          fillOpacity="0.8"
        />
      </g>
    </>
  )
}
export default RoboCop
