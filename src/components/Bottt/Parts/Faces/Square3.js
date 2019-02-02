import React from 'react'

const Square3 = () => {
  return (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 18C0 8.05888 8.05888 0 18 0H112C121.941 0 130 8.05888 130 18V45.1483C130 49.6831 129.229 54.1848 127.72 58.4611L110.239 107.991C107.699 115.187 100.896 120 93.2647 120H36.7353C29.1036 120 22.3014 115.187 19.7614 107.991L2.28038 58.4611C0.771117 54.1848 0 49.6831 0 45.1483L0 18Z"
        fill="#0076DE"
      />
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
          d="M0 18C0 8.05888 8.05888 0 18 0H112C121.941 0 130 8.05888 130 18V45.1483C130 49.6831 129.229 54.1848 127.72 58.4611L110.239 107.991C107.699 115.187 100.896 120 93.2647 120H36.7353C29.1036 120 22.3014 115.187 19.7614 107.991L2.28038 58.4611C0.771117 54.1848 0 49.6831 0 45.1483L0 18Z"
          fill="white"
        />
      </mask>
      <g mask="url(#facemask)">
        <rect x="-2" y="-2" width="134" height="124" fill="#B0BEC5" />
      </g>
    </>
  )
}
export default Square3
