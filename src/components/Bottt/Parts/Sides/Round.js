import React from 'react'

const Round = props => {
  return (
    <>
      <mask
        id="sidemask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="12"
        y="16"
        width="156"
        height="45"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 39C12 50.9264 17.9543 61 28 61C38.0457 61 48 50.9264 48 39C48 26.0736 38.0457 16 28 16C17.9543 16 12 26.0736 12 39ZM168 39C168 50.9264 162.046 61 152 61C141.954 61 132 50.9264 132 39C132 26.0736 141.954 16 152 16C162.046 16 168 26.0736 168 39Z"
          fill="white"
        />
      </mask>
      <g mask="url(#sidemask)">
        <rect width="180" height="76" fill={props.color} />
        <rect x="20" width="140" height="76" fill="black" fillOpacity="0.2" />
      </g>
    </>
  )
}
export default Round
