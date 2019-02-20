import React from 'react'
import Camo1 from './Textures/Camo1'
import Camo2 from './Textures/Camo2'
import Circuits from './Textures/Circuits'
import Dirty1 from './Textures/Dirty1'
import Dirty2 from './Textures/Dirty2'
import Dots from './Textures/Dots'

const Texture = props => {
  const types = {
    None: null,
    Camo1,
    Camo2,
    Circuits,
    Dirty1,
    Dirty2,
    Dots
  }
  const typeKeys = Object.keys(types)
  const Type = types[typeKeys[props.type]]
  return <g id="texture_part">{Type && <Type />}</g>
}
export default Texture
