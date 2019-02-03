import React from 'react'
import Antenna1 from './Sides/Antenna1'
import Antenna2 from './Sides/Antenna2'
import Cables1 from './Sides/Cables1'
import Cables2 from './Sides/Cables2'
import Round from './Sides/Round'
import Square from './Sides/Square'
import SquareAssymetric from './Sides/SquareAssymetric'

const Sides = props => {
  const types = {
    Antenna1,
    Antenna2,
    Cables1,
    Cables2,
    Round,
    Square,
    SquareAssymetric
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="side_part" transform="translate(0, 66)">
      <Type />
    </g>
  )
}
export default Sides
