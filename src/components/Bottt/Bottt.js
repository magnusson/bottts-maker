import React, { Component } from 'react'
import Top from './Parts/Top'
import Eyes from './Parts/Eyes'
import Face from './Parts/Face'
import Mouth from './Parts/Mouth'
import Side from './Parts/Side'

class Bottt extends Component {
  state = {
    top: 0,
    side: 0,
    face: 0,
    eyes: 0,
    mouth: 0,
    randomize: false
  }
  render() {
    const { side, top, face, eyes, mouth, randomize } = this.state
    return (
      <>
        <svg width="180" height="180" viewBox="0 0 180 180">
          <Side type={side} randomize={randomize} />
          <Top type={top} randomize={randomize} />
          <Face type={face} randomize={randomize} />
          <Eyes type={eyes} randomize={randomize} />
          <Mouth type={mouth} randomize={randomize} />
        </svg>
      </>
    )
  }
}
export default Bottt
