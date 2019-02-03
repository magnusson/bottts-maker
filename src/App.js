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
    this.setState({
      top: { value: Math.round(Math.random() * (10 - 0) + 0), max: 10 },
      side: { value: Math.round(Math.random() * (6 - 0) + 0), max: 6 },
      face: { value: Math.round(Math.random() * (7 - 0) + 0), max: 7 },
      eyes: { value: Math.round(Math.random() * (15 - 0) + 0), max: 15 },
      mouth: { value: Math.round(Math.random() * (10 - 0) + 0), max: 10 }
    })
  }
  render() {
    return (
      <div>
        <h1>Bottts Maker</h1>
        <Bottt types={this.state} />
        <Controls types={this.state} setType={this.setType}>
          <button onClick={this.randomizeBottt}>Randomize</button>
        </Controls>
      </div>
    )
  }
}
export default App
