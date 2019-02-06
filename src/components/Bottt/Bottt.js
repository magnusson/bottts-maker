import React, { Component } from 'react'
import Top from './Parts/Top'
import Eyes from './Parts/Eyes'
import Face from './Parts/Face'
import Mouth from './Parts/Mouth'
import Side from './Parts/Side'

class Bottt extends Component {
  render() {
    const { side, top, face, eyes, mouth, size, className } = this.props
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 180 180"
        className={className}
      >
        <Side type={side.value} color={side.color} />
        <Top type={top.value} color={top.color} />
        <Face type={face.value} color={face.color} />
        <Eyes type={eyes.value} />
        <Mouth type={mouth.value} />
      </svg>
    )
  }
}
export default Bottt
