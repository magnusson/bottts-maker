import React from 'react'

const Frame2 = () => {
  return (
    <>
      <rect
        x="8"
        y="10"
        width="88"
        height="36"
        rx="4"
        fill="black"
        fillOpacity="0.8"
      />
      <rect x="28" y="21" width="10" height="17" rx="2" fill="#5EF2B8" />
      <rect x="66" y="21" width="10" height="17" rx="2" fill="#5EF2B8" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83 10H88L76 46H71L83 10Z"
        fill="white"
        fillOpacity="0.4"
      />
    </>
  )
}
export default Frame2
