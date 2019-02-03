import React from 'react'
import Arturito from './Mouths/Arturito'
import Bite from './Mouths/Bite'
import Diagram from './Mouths/Diagram'
import Grill1 from './Mouths/Grill1'
import Grill2 from './Mouths/Grill2'
import Grill3 from './Mouths/Grill3'
import Robocop from './Mouths/Robocop'
import Smile1 from './Mouths/Smile1'
import Smile2 from './Mouths/Smile2'
import Square1 from './Mouths/Square1'
import Square2 from './Mouths/Square2'

const Mouth = props => {
  const types = {
    Arturito,
    Bite,
    Diagram,
    Grill1,
    Grill2,
    Grill3,
    Robocop,
    Smile1,
    Smile2,
    Square1,
    Square2
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return (
    <g id="mouth_part" transform="translate(52, 124)">
      <Type />
    </g>
  )
}
export default Mouth
