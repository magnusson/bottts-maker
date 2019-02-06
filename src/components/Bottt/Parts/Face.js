import React from 'react'
import Arturito from './Faces/Arturito'
import RoboCop from './Faces/RoboCop'
import Round1 from './Faces/Round1'
import Round2 from './Faces/Round2'
import Square1 from './Faces/Square1'
import Square2 from './Faces/Square2'
import Square3 from './Faces/Square3'
import Square4 from './Faces/Square4'

const Face = props => {
  const types = {
    Arturito,
    RoboCop,
    Round1,
    Round2,
    Square1,
    Square2,
    Square3,
    Square4
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="face_part" transform="translate(25, 44)">
      <Type color={props.color} />
    </g>
  )
}
export default Face
