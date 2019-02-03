import React, { Component } from 'react'
import Top from './Parts/Top'
import Eyes from './Parts/Eyes'
import Face from './Parts/Face'
import Mouth from './Parts/Mouth'
import Side from './Parts/Side'

class Bottt extends Component {
  render() {
    const { side, top, face, eyes, mouth } = this.props
    return (
      <svg width="180" height="180" viewBox="0 0 180 180">
        <Side type={side.value} />
        <Top type={top.value} />
        <Face type={face.value} />
        <Eyes type={eyes.value} />
        <Mouth type={mouth.value} />
      </svg>
    )
  }
}
export default Bottt
