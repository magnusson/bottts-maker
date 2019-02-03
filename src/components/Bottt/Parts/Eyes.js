import React from 'react'
import Arturito from './Eyes/Arturito'
import Bulging from './Eyes/Bulging'
import Dizzy from './Eyes/Dizzy'
import Eva from './Eyes/Eva'
import Frame1 from './Eyes/Frame1'
import Frame2 from './Eyes/Frame2'
import Glow from './Eyes/Glow'
import Hal from './Eyes/Hal'
import Happy from './Eyes/Happy'
import Hearts from './Eyes/Hearts'
import Robocop from './Eyes/Robocop'
import Round from './Eyes/Round'
import RoundFrame1 from './Eyes/RoundFrame1'
import RoundFrame2 from './Eyes/RoundFrame2'
import Sensor from './Eyes/Sensor'
import Shade from './Eyes/Shade'

const Eyes = props => {
  const types = {
    Arturito,
    Bulging,
    Dizzy,
    Eva,
    Frame1,
    Frame2,
    Glow,
    Hal,
    Happy,
    Hearts,
    Robocop,
    Round,
    RoundFrame1,
    RoundFrame2,
    Sensor,
    Shade
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="eyes_part" transform="translate(38, 76)">
      <Type />
    </g>
  )
}
export default Eyes
