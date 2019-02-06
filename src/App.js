import React, { Component } from 'react'
import styled from 'styled-components'
import { Button } from './styles'
import { device, randomHex } from './utils'
import Bottt from './components/Bottt/Bottt'
import Controls from './components/Controls'
import Download from './components/Download'

const botttRef = React.createRef()

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;

  @media ${device.tablet} {
    flex-direction: row;
  }
`

const BotttWrapper = styled(Bottt)`
  margin: 25px auto;

  @media ${device.tablet} {
    margin: auto;
  }
`

class App extends Component {
  state = {
    top: { value: 0, max: 10, color: '#607D8B' },
    side: { value: 0, max: 6, color: '#9CCC65' },
    face: { value: 0, max: 7, color: '#9CCC65' },
    eyes: { value: 0, max: 15 },
    mouth: { value: 0, max: 10 },
    size: 256
  }
  setType = type => {
    this.setState(type)
  }
  setColor = color => {
    this.setState(color)
  }
  randomizeBottt = () => {
    const { top, side, face, eyes, mouth } = this.state
    this.setState({
      top: {
        value: Math.round(Math.random() * (top.max - 0) + 0),
        max: top.max,
        color: randomHex()
      },
      side: {
        value: Math.round(Math.random() * (side.max - 0) + 0),
        max: side.max,
        color: randomHex()
      },
      face: {
        value: Math.round(Math.random() * (face.max - 0) + 0),
        max: face.max,
        color: randomHex()
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
    const { top, side, face, eyes, mouth, size } = this.state
    return (
      <Main>
        <BotttWrapper
          top={top}
          side={side}
          face={face}
          eyes={eyes}
          mouth={mouth}
          ref={botttRef}
          size={size}
        />
        <Controls
          top={top}
          side={side}
          face={face}
          eyes={eyes}
          mouth={mouth}
          setType={this.setType}
          setColor={this.setColor}
        >
          <Button onClick={this.randomizeBottt}>Randomize</Button>
          <Download svgRef={botttRef} size={size} />
        </Controls>
      </Main>
    )
  }
}
export default App
