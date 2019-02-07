import React from 'react'
import Antenna from './Tops/Antenna'
import AntennaCrooked from './Tops/AntennaCrooked'
import Bulb1 from './Tops/Bulb1'
import Bulb2 from './Tops/Bulb2'
import GlowingBulb1 from './Tops/GlowingBulb1'
import GlowingBulb2 from './Tops/GlowingBulb2'
import Horns from './Tops/Horns'
import Lights from './Tops/Lights'
import Plankton from './Tops/Plankton'
import Pyramid from './Tops/Pyramid'
import Radar from './Tops/Radar'

const Top = props => {
  const types = {
    None: null,
    Antenna,
    AntennaCrooked,
    Bulb1,
    Bulb2,
    GlowingBulb1,
    GlowingBulb2,
    Horns,
    Lights,
    Plankton,
    Pyramid,
    Radar
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="top_part" transform="translate(41, 0)">
      {Type && <Type color={props.color} />}
    </g>
  )
}
export default Top
