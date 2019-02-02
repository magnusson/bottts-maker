import React from 'react'

const Diagram = () => {
  return (
    <>
      <rect
        x="4"
        y="4"
        width="68"
        height="24"
        rx="5"
        fill="black"
        fillOpacity="0.2"
      />
      <rect
        x="8"
        y="8"
        width="60"
        height="16"
        rx="2"
        fill="black"
        fillOpacity="0.8"
      />
      <path
        d="M9 17H20L22 13L25 20L29 12L31 21L34 10L37 20L40 17H55L58 13L60 20L63 17H67"
        stroke="#4EFAC9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  )
}
export default Diagram
