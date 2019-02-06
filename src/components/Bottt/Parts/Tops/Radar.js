import React from 'react'

const Radar = props => {
  return (
    <>
      <mask
        id="topmask"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="37"
        y="0"
        width="36"
        height="53"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.7993 28.3969C35.9888 20.5865 35.9888 7.92316 43.7993 0.112671L57.2343 13.5477L63.6874 7.09463C62.7814 5.56072 62.9874 3.55192 64.3054 2.23399C65.8675 0.671894 68.4001 0.671894 69.9622 2.23399C71.5243 3.79609 71.5243 6.32875 69.9622 7.89085C68.6443 9.20878 66.6355 9.41478 65.1016 8.50884L58.6485 14.9619L72.0835 28.3969C66.6332 33.8472 58.8199 35.4942 51.9414 33.3379V52.1127H47.9414V31.581C46.4606 30.7252 45.0661 29.6638 43.7993 28.3969Z"
          fill="white"
        />
      </mask>
      <g mask="url(#topmask)">
        <rect width="100" height="52" fill={props.color} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.7988 0.112671C35.9883 7.92316 35.9883 20.5865 43.7988 28.3969C51.6093 36.2074 64.2726 36.2074 72.0831 28.3969"
          fill="white"
          fillOpacity="0.2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64.3054 7.89092C65.8675 9.45302 68.4001 9.45302 69.9622 7.89092C71.5243 6.32882 71.5243 3.79616 69.9622 2.23407C68.4001 0.67197 65.8675 0.67197 64.3054 2.23407C62.7433 3.79616 62.7433 6.32882 64.3054 7.89092Z"
          fill="white"
          fillOpacity="0.8"
        />
      </g>
    </>
  )
}
export default Radar
