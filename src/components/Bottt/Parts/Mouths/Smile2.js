import React from 'react'

const Smile2 = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10.2222C18 21.7845 24.4741 28 38 28C51.5182 28 58 21.6615 58 10.2222C58 9.49622 57.1739 8 55 8C39.2707 8 29.1917 8 21 8C18.949 8 18 9.38479 18 10.2222Z"
        fill="black"
        fillOpacity="0.8"
      />
      <mask
        id="mouthmask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="18"
        y="8"
        width="40"
        height="20"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 10.2222C18 21.7845 24.4741 28 38 28C51.5182 28 58 21.6615 58 10.2222C58 9.49622 57.1739 8 55 8C39.2707 8 29.1917 8 21 8C18.949 8 18 9.38479 18 10.2222Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mouthmask)">
        <rect x="30" y="2" width="16" height="14" rx="2" fill="white" />
      </g>
    </>
  )
}
export default Smile2
