import { observer } from 'mobx-react-lite'
import store from '../../store'

export const ArtuioFace = observer(() => (
  <>
    <mask
      id="artuioFace"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="130"
      height="120"
    >
      <path
        d="M0 65C0 29.1015 29.1015 0 65 0V0C100.899 0 130 29.1015 130 65V117.647C130 118.947 128.947 120 127.647 120H2.35294C1.05345 120 0 118.947 0 117.647V65Z"
        fill="white"
      />
    </mask>
    <g mask="url(#artuioFace)">
      <rect x="-1" y="-1" width="132" height="122" fill={store.faces.color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 80H10V107H0V80Z"
        fill="#0040AE"
        fillOpacity="0.8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 111H130V116H0V111Z"
        fill="#0040AE"
        fillOpacity="0.8"
      />
      <rect
        x="121"
        y="80"
        width="9"
        height="27"
        fill="#0040AE"
        fillOpacity="0.8"
      />
      <rect
        x="7.2998"
        y="8"
        width="54.9"
        height="16.1835"
        fill="#0040AE"
        fillOpacity="0.8"
      />
      <rect
        x="65.7998"
        y="8"
        width="54.9"
        height="16.1835"
        fill="#0040AE"
        fillOpacity="0.8"
      />
    </g>
  </>
))

export const RoboCopFace = observer(() => (
  <>
    <mask
      id="roboCopFace"
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
    <g mask="url(#roboCopFace)">
      <rect x="-2" width="134" height="120" fill={store.faces.color} />
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
))

export const RoundFace1 = observer(() => (
  <>
    <mask
      id="roundFace1"
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
        d="M66 0C124.352 0 130.001 40.6854 130 78C129.999 111.315 104.534 120 66 120C28.5387 120 0 111.315 0 78C0 40.6854 7.64843 0 66 0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#roundFace1)">
      <rect x="-4" y="-2" width="138" height="124" fill={store.faces.color} />
    </g>
  </>
))

export const RoundFace2 = observer(() => (
  <>
    <mask
      id="roundFace2"
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
        d="M0 31C0 31.0205 0.0141049 30.8164 0 30C0.183375 29.5235 0.402009 28.5029 1 27C1.82671 23.944 3.7804 20.4435 7 17C16.6944 6.60017 35.1724 0 65 0C94.8276 0 113.306 6.60036 123 17C126.22 20.4435 128.173 23.944 129 27C129.598 28.5029 129.817 29.5236 130 30C129.986 30.8164 130 31.0205 130 31V70C130 69.8964 129.972 70.5012 130 71C129.739 73.1171 129.471 75.0149 129 77C127.814 82.9912 125.606 88.911 122 94C112.283 110.337 94.2553 120 65 120C35.7448 120 17.7164 110.338 8 94C4.39414 88.9108 2.1865 82.9912 1 77C0.529043 75.0149 0.261028 73.1171 0 71C0.0282767 70.5466 6.49997e-05 69.6771 0 70V31Z"
        fill="white"
      />
    </mask>
    <g mask="url(#roundFace2)">
      <rect x="-4" y="-2" width="138" height="124" fill={store.faces.color} />
    </g>
  </>
))

export const SquareFace1 = observer(() => (
  <>
    <mask
      id="squareFace1"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="130"
      height="120"
    >
      <rect width="130" height="120" rx="18" fill="white" />
    </mask>
    <g mask="url(#squareFace1)">
      <rect x="-2" y="-2" width="134" height="124" fill={store.faces.color} />
    </g>
  </>
))

export const SquareFace2 = observer(() => (
  <>
    <mask
      id="squareFace2"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="130"
      height="120"
    >
      <path
        d="M0 12C0 5.37259 5.37258 0 12 0H118C124.627 0 130 5.37258 130 12V82C130 102.987 112.987 120 92 120H38C17.0132 120 0 102.987 0 82V12Z"
        fill="white"
      />
    </mask>
    <g mask="url(#squareFace2)">
      <rect x="-2" y="-2" width="134" height="124" fill={store.faces.color} />
    </g>
  </>
))

export const SquareFace3 = observer(() => (
  <>
    <mask
      id="squareFace3"
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
    <g mask="url(#squareFace3)">
      <rect x="-2" y="-2" width="134" height="124" fill={store.faces.color} />
    </g>
  </>
))

export const SquareFace4 = observer(() => (
  <>
    <mask
      id="squareFace4"
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
        d="M0 102V68.8517C0 64.3169 0.77112 59.8152 2.28039 55.5389L19.7614 12.0092C22.3014 4.81263 29.1036 0 36.7353 0L93.2647 0C100.896 0 107.699 4.81263 110.239 12.0092L127.72 55.5389C129.229 59.8152 130 64.3169 130 68.8517V102C130 111.941 121.941 120 112 120H18C8.05887 120 0 111.941 0 102Z"
        fill="white"
      />
    </mask>
    <g mask="url(#squareFace4)">
      <rect x="-2" y="-2" width="134" height="124" fill={store.faces.color} />
    </g>
  </>
))
