export const Antenna = () => (
  <>
    <mask
      id="antenna"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="38"
      y="5"
      width="24"
      height="47"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52 5H48V36H40C38.8954 36 38 36.8954 38 38V52H62V38C62 36.8954 61.1046 36 60 36H52V5Z"
        fill="white"
      />
    </mask>
    <g mask="url(#antenna)">
      <rect width="100" height="52" fill="#2F4858" />
      <rect
        x="38"
        y="36"
        width="24"
        height="16"
        fill="white"
        fillOpacity="0.2"
      />
    </g>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 16C54.4183 16 58 12.4183 58 8C58 3.58172 54.4183 0 50 0C45.5817 0 42 3.58172 42 8C42 12.4183 45.5817 16 50 16Z"
      fill="#FFE65C"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M53 8C54.6569 8 56 6.65685 56 5C56 3.34315 54.6569 2 53 2C51.3431 2 50 3.34315 50 5C50 6.65685 51.3431 8 53 8Z"
      fill="white"
    />
  </>
)

export const GlowingBulb1 = () => (
  <>
    <g filter="url(#topfilter)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 24C32 15.1634 39.1634 8 48 8H52C60.8366 8 68 15.1634 68 24V32C68 36.4183 64.4183 40 60 40H40C35.5817 40 32 36.4183 32 32V24Z"
        fill="white"
        fillOpacity="0.3"
      />
    </g>
    <path
      d="M49 11.5C53.9315 11.5 58.366 13.6281 61.4352 17.0162"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M49.8284 29L40.8284 20L38 22.8284L48 32.8284V40H52V32.9706L62.1421 22.8284L59.3137 20L50.3137 29H49.8284Z"
      fill="white"
      fillOpacity="0.8"
    />
    <rect x="22" y="40" width="56" height="12" rx="1" fill="#2F4858" />
    <mask
      id="glowingBulb1"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="22"
      y="40"
      width="56"
      height="12"
    >
      <rect x="22" y="40" width="56" height="12" rx="1" fill="white" />
    </mask>
    <g mask="url(#glowingBulb1)" />
    <defs>
      <filter
        id="topfilter"
        x="24"
        y="0"
        width="52"
        height="48"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="4" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
        />
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow" />
      </filter>
    </defs>
  </>
)
