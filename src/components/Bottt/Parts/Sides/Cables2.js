import React from 'react'

const Cables2 = props => {
  return (
    <>
      <g opacity="0.9" fill="transparent">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.5 41C41.6127 41 49 32.9411 49 23C49 13.0589 41.6127 5 32.5 5C23.3873 5 16 13.0589 16 23C16 32.9411 23.3873 41 32.5 41Z"
          stroke="#2A3544"
          strokeWidth="6"
        />
        <path
          d="M29.5152 36.7649C22.1017 41.0451 12.5101 38.3112 8.0918 30.6585"
          stroke="#2A3544"
          strokeWidth="4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 67C37.3888 67 45 60.5081 45 52.5C45 44.4919 37.3888 38 28 38C18.6112 38 12 44.4919 12 52.5C12 60.5081 18.6112 67 28 67Z"
          stroke="#2A3544"
          strokeWidth="4"
        />
      </g>
      <g opacity="0.9" fill="transparent">
        <path
          d="M168.606 60.4234C164.326 53.0099 154.653 50.5817 147 55"
          stroke="#2A3544"
          strokeWidth="4"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M148 38C157.389 38 165 31.0604 165 22.5C165 13.9396 157.389 7 148 7C138.611 7 132 13.9396 132 22.5C132 31.0604 138.611 38 148 38Z"
          stroke="#2A3544"
          strokeWidth="6"
        />
      </g>
      <mask
        id="sidemask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="21"
        y="0"
        width="138"
        height="72"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M145 0C143.895 0 143 0.89543 143 2V20C143 21.1046 143.895 22 145 22H157C158.105 22 159 21.1046 159 20V2C159 0.895431 158.105 0 157 0H145ZM23 27C21.8954 27 21 27.8954 21 29V47C21 48.1046 21.8954 49 23 49H35C36.1046 49 37 48.1046 37 47V29C37 27.8954 36.1046 27 35 27H23ZM24 60C22.8954 60 22 60.8954 22 62V70C22 71.1046 22.8954 72 24 72H36C37.1046 72 38 71.1046 38 70V62C38 60.8954 37.1046 60 36 60H24ZM143 44C143 42.8954 143.895 42 145 42H157C158.105 42 159 42.8954 159 44V62C159 63.1046 158.105 64 157 64H145C143.895 64 143 63.1046 143 62V44Z"
          fill="white"
        />
      </mask>
      <g mask="url(#sidemask)">
        <rect width="180" height="76" fill={props.color} />
      </g>
    </>
  )
}
export default Cables2
