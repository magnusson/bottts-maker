import React, { Component } from 'react'
import Bottt from './components/Bottt/Bottt'
import Controls from './components/Controls'

class App extends Component {
  state = {
    top: { value: 0, max: 10 },
    side: { value: 0, max: 6 },
    face: { value: 0, max: 7 },
    eyes: { value: 0, max: 15 },
    mouth: { value: 0, max: 10 }
  }
  setType = type => {
    this.setState(type)
  }
  randomizeBottt = () => {
    const { top, side, face, eyes, mouth } = this.state
    this.setState({
      top: {
        value: Math.round(Math.random() * (top.max - 0) + 0),
        max: top.max
      },
      side: {
        value: Math.round(Math.random() * (side.max - 0) + 0),
        max: side.max
      },
      face: {
        value: Math.round(Math.random() * (face.max - 0) + 0),
        max: face.max
      },
      eyes: {
        value: Math.round(Math.random() * (eyes.max - 0) + 0),
        max: eyes.max
      },
      mouth: {
        value: Math.round(Math.random() * (mouth.max - 0) + 0),
        max: mouth.max
      }
    })
  }
  render() {
    const { top, side, face, eyes, mouth } = this.state
    return (
      <div>
        <h1>Bottts Maker</h1>
        <Bottt top={top} side={side} face={face} eyes={eyes} mouth={mouth} />
        <Controls
          top={top}
          side={side}
          face={face}
          eyes={eyes}
          mouth={mouth}
          setType={this.setType}
        >
          <button onClick={this.randomizeBottt}>Randomize</button>
        </Controls>
      </div>
    )
  }
}
export default App
