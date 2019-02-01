import React from 'react'

const Square1 = () => {
  return (
    <>
      <rect width="130" height="120" rx="18" fill="#0076DE" />
      <mask
        id="facemask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="130"
        height="120"
      >
        <rect width="130" height="120" rx="18" fill="white" />
      </mask>
      <g mask="url(#facemask)">
        <rect x="-2" y="-2" width="134" height="124" fill="#B0BEC5" />
      </g>
    </>
  )
}
export default Square1
